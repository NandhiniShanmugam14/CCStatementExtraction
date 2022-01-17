import re
from bson.objectid import ObjectId
import pdfplumber
from fastapi import APIRouter
from fastapi import File
from fastapi import UploadFile
from models.user import user
from config.db import conn
from schemas.user import serializeDict, serializeList

userRouter = APIRouter()
@userRouter.get('/')
async def find_all_users():
    return serializeList(conn.local.user.find())

# @userRouter.post('/')
# async def save_user(cus:user):
#     conn.local.user.insert_one(dict(cus))
#     return serializeList(conn.local.user.find())

@userRouter.post('/pdf')
async def upload_file(file: UploadFile = File(...)):
    with pdfplumber.open(file.file) as pdf:
        page = pdf.pages[0]
        content = page.extract_text()

    user_reg = re.compile(r'NAME:')
    for line in content.split('\n'):
        if user_reg.match(line):
            usern = line.split()
    username = usern[1] +" "+ usern[2]

    acc_reg = re.compile(r'ACCOUNT')
    for line in content.split('\n'):
        if acc_reg.match(line):
            accno = line.split()
    account_number = accno[2] + accno[3]+accno[4]+accno[5]

    payment_reg = re.compile(r'Payment ')
    for line in content.split('\n'):
        if payment_reg.match(line):
            paymentdue = line.split()
            payment = paymentdue[3] + paymentdue[4] + paymentdue[5]

    allUsers=serializeList(conn.local.user.find())

    count = 0

    for item in allUsers:
        if(item["AccountNumber"] == account_number):
            count +=1

    obj=user(userName=username,AccountNumber=account_number,userCredit=[],paymentDue=[])

    if(count==0):
        conn.local.user.insert_one(dict(obj))

    count1 = 0
    Paymentcheck=serializeList(conn.local.user.find({"AccountNumber":account_number}))

    for item in Paymentcheck:
        if(payment in item["paymentDue"]):
            count1 += 1
        else:
            count1 = 0
    if(count1 == 0):
        conn.local.user.find_one_and_update({"AccountNumber":account_number},{"$push":{"paymentDue":payment}},{"upsert":True})
        credits_re=re.compile(r'^\d{1,2} [A-Z].*')

        amount = ""
        date = ""
        count2 = 0

        for line in content.split('\n'):
            if credits_re.match(line):
                d = line.split()
                activity_desc = ""
                date=d[0]+" "+d[1]+" "+d[2]
                for  i in range(4, len(d)):
                    if(d[i].find('$')):
                        activity_desc += d[i-1]+" "+d[i]
                        amount = d[i+1]
                    
                conn.local.user.find_one_and_update({"AccountNumber":account_number},{"$push":{"userCredit":{"date":date,"activity":activity_desc,"amount":amount}}},{"upsert":True})
        return "Hi "+ username+"!! Credit Card statement added successfully"
    else:
        return "Hi "+ username+"!! The Statement is already added, Please try some other file"


@userRouter.delete('/{id}')
async def delete_user(id,user: user):
    return serializeDict(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))



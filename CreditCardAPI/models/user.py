from pydantic import BaseModel
from typing import List

class creditCardDetails(BaseModel):
    date:str
    activity:str
    amount:str

class user(BaseModel):
    userName:str
    AccountNumber:str
    userCredit:List[creditCardDetails]
    paymentDue:list
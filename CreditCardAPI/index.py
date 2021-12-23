from fastapi import FastAPI
from routes.user import userRouter

app = FastAPI()
app.include_router(userRouter)
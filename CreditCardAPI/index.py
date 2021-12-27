from fastapi import FastAPI
from routes.user import userRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(userRouter)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
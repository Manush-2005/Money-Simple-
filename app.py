from fastapi import FastAPI,UploadFile, File
import nbformat
from nbconvert import PythonExporter
import os
import google.generativeai
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


origins = [
    "http://localhost:5173",  
    "http://localhost:8000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/processcsv")
async def process_file(id: str, file: UploadFile = File(...)):
    print(id)
    file_location = f"files/{file.filename}"
    print(file_location)
    with open(file_location, "wb+") as file_object:
        file_object.write(await file.read())

    with open("DataProcessing.ipynb", "r") as f:
        nb = nbformat.read(f, as_version=4)   


    nb.cells[0].source = nb.cells[0].source.replace('"finacecsv.csv"',f'"{file.filename}"' )
    nb.cells[0].source = nb.cells[0].source.replace('"6628ba4891f7cd111214510d"', f'"{id}"')
    exporter = PythonExporter()
    script, _ = exporter.from_notebook_node(nb)
   

    exec(script)
   

    return {"message": "Notebook executed successfully"}     
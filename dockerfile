FROM python:3.10

RUN pip install --upgrade pip

# Create a directory for your app and set it as the working directory
WORKDIR /app

# Copy just the requirements file to the working directory
COPY requirements.txt .

# Install the project dependencies
RUN pip install -r requirements.txt

# To generate detection model using dataset
CMD ["python3", "tb_detection_model.py"]

# Copy the entire project into the container
COPY . /app

# Define the command to run your application
CMD ["python3", "app.py"]

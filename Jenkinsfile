pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Test') {
            steps {
                // Compile and test your code here
                sh 'pip install -r requirements.txt'
                sh 'python3 app.py'  // Replace with your testing command
            }
        }
        stage('Package') {
            steps {
                // Build a Docker image
                sh 'docker build -t tuberculosisai:1.0 .'
                
                // Run the Docker container
                sh 'docker run -d -p 5000:5000 tuberculosisai:1.0'
            }
        }
    }
}

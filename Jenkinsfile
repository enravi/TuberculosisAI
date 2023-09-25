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
                sh 'docker build -t tuberculosisai:1.0 .'
                sh 'docker run -d -p 5000:5000 tuberculosisai:1.0'
                // Add unit tests here
            }
        }
        stage('Package') {
            steps {
                // Add packaging steps (e.g., creating Docker images, pushing to a registry)
            }
        }
    }
}

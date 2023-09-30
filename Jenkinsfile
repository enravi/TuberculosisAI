pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Test') {
            steps {
                sh 'docker build -t enravi/tuberculosisai:1.0 -f ./dockerfile .'
                sh 'docker run -d -p 5000:5000 enravi/tuberculosisai:1.0'
            }
        }
        
    }
}

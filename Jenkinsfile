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
                sh 'docker build -t tuberculosisai:2.0 -f ./dockerfile .'
                sh 'docker run -d -p 5000:5000 tuberculosisai:2.0'
            }
        }
        
    }
}

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
                sh 'docker build -t tuberculosisai:1.0 -f ./dockerfile .'
                sh 'docker run -d -p 5000:5000 tuberculosisai:1.0'
                // Add unit tests or other testing steps here
            }
        }
        
    }
}

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
                sh 'docker build -t enravi/tuberculosisai:1.0 .'
            }
        }
       
    }
}

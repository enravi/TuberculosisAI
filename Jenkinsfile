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
                 script {
                    def dockerImage = 'enravi/tuberculosisai:1.0'
                    sh "docker build -t ${dockerImage} ."
                    
                    // Run unit tests or other testing steps here
                }
            }
        }
       
    }
}

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
                sh 'cd TuberculosisAI'
                sh 'docker build -t tuberculosisai:1.0 .'
            }
        }
        }
       
    }
}

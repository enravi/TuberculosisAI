pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        HOME = sh(script: 'echo $HOME', returnStdout: true).trim()
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Project Dependencies') {
            steps {
                sh '~/.local/bin/pip install --user -r requirements.txt'
            }
        }
        stage('Build and Test') {
            steps {
                sh 'docker build -t tuberculosisai:1.0 .'
                sh 'docker run -d -p 5000:5000 tuberculosisai:1.0'
                // Add unit tests here
            }
        }
        }
       
    }
}

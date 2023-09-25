pipeline {
agent any
stages {
stage('Checkout') {
steps {
checkout scm
}
}
stage('Configure Home Directory') {
steps {
// Configure home directory outside of '/home'
{
jenkins.model.Jenkins.instance.getGlobalNodeProperties().getEnvVars().put('HOME', '/home/jenkins');
}
}
}
stage('Install Python') {
steps {
sh 'sudo apt-get update -y'
sh 'sudo apt-get install python3.8 -y'
}
}
stage('Install pip') {
steps {
sh 'curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py'
sh 'python3.8 get-pip.py'
}
}
stage('Check Python and pip Versions') {
steps {
sh 'python3.8 --version'
sh 'pip --version'
}
}
stage('Install Project Dependencies') {
steps {
sh 'pip install -r requirements.txt'
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

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
{jenkins ->
jenkins.model.Jenkins.instance.getGlobalNodeProperties().getEnvVars().put('HOME', '/home/jenkins');
}
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

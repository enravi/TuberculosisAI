pipeline {
  stages {
    stage('Build') {
      withEnv(['DOCKER_BUILDKIT': '1']) {
        // Checkout the code
        checkout()

        // Build the Docker image
        sh 'docker build -t tuberculosisai:1.0 .'
      }
    }
  }
}

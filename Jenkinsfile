pipeline 
{
    agent any
    withEnv(['DOCKER_BUILDKIT': '1']){
    stages 
   {
        stage('Build') 
        {
            steps 
            {
                checkout scm
                sh 'docker build -t tuberculosisai:1.0 .'
            }
        }
    }
}
}

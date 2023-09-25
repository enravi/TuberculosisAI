pipeline 
{
    agent any
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

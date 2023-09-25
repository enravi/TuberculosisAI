pipeline 
{
    agent any
    stages 
    {   
        stage('Configure Home Directory') 
         {
          steps 
            {
              // Configure home directory outside of '/home'
              jenkins.model.Jenkins.instance.getGlobalNodeProperties().getEnvVars().put('HOME', '/home/jenkins');
            }
         }
        stage('GIT Checkout') 
        {
            steps 
            {
                checkout scm
            }
        }
        stage('Build and Test') 
         {
          steps {
                sh 'docker build -t tuberculosisai:1.0 .'
                sh 'docker run -d -p 5000:5000 tuberculosisai:1.0'
                // Add unit tests here
                }
        }
        
    }
       
}


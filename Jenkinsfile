pipeline{
  agent any
  
  stages{
    stage(compile){
      steps{
        sh 'mvn clean install'
      }
    }
    
    stage(test){
      steps{
        sh 'mvn test'
      }
    }
    
    stage(deploy){
      steps{
        sh 'mvn deploy'
      }
    }
  }
}

pipeline{
  agent any
  
  stages{
    stage(compile){
      step{
        sh 'mvn clean compile'
      }
    }
    
    stage(test){
      step{
        sh 'mvn test'
      }
    }
    
    stage(deploy){
      step{
        sh 'mvn deploy'
      }
    }
  }
}

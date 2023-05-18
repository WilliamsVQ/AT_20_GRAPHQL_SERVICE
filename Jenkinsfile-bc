pipeline {
    agent any
    stages {
        stage ('Hello') {
            steps {
                sh 'echo Hello World'
                sh 'echo Hello class'
            }
        }
        stage ('Tests') {
            steps {
                sh 'echo Here is the testing command'
            }
            }
        stage ('Messages') {

            steps {
                sh 'echo This is a message from the third stage'
            }
        }

        
        }
    }

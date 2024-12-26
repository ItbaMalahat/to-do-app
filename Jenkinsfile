pipeline {
    agent any
    environment {
        HOME = '/home/jenkins' // Update this path if your Jenkins home directory is different
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev', url: 'https://github.com/ItbaMalahat/to-do-app.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh '''
                export HOME=$HOME  # Ensure HOME is explicitly set
                docker-compose build
                '''
            }
        }
        stage('Deploy to Dev Environment') {
            steps {
                sh '''
                export HOME=$HOME  # Ensure HOME is explicitly set
                docker-compose up -d
                '''
            }
        }
    }
    post {
        success {
            echo 'Deployment to Development environment completed successfully.'
        }
        failure {
            echo 'Deployment to Development environment failed.'
        }
    }
}

pipeline { 
    agent any 
    stages { 
        stage('Build') { 
            steps { 
                echo "Building.." 
                sh ''' 
                echo "doing build stuff.. 1111" 
                ''' 
            } 
        } 
        stage('Test') { 
            steps { 
                echo "Testing.." 
                sh ''' 
                echo "doing test stuff.." 
                ''' 
            } 
        } 
        stage('Deliver') { 
            steps { 
                echo 'Deliver....' 
                sh ''' 
                echo "doing delivery stuff.." 
                ''' 
            } 
        } 
    } 
}

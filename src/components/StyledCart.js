import styled from 'styled-components';

export const ProductNotFound = styled.div `
        background: var(--mainSnow)!important;
        
        .witcher {
            margin-top: 40px;
            width: 300px;
            height: 300px;
            animation: move 3s infinite;
        }

        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }

          @keyframes move {
              50% {
                  transform: translateY(80px);
              }

              100% {
                    transform: translateY(0px);  
              }
          }
        

        
`
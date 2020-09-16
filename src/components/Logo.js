import React from 'react'
import styled from 'styled-components'

const Logo = () => (
  <StyledLogo>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.96 159.93">
      <path d="M141.35,73.27c0-6.89-8.11-13-20.58-16.73,3-12.67,1.69-22.75-4.28-26.16a9.55,9.55,0,0,0-4.79-1.2c-5.57,0-12.61,3.89-19.72,10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46,9.46,0,0,0-4.86,1.22c-5.94,3.42-7.17,13.44-4.21,26.05-12.41,3.71-20.48,9.77-20.5,16.63s8.12,13,20.59,16.72c-3,12.68-1.7,22.75,4.28,26.16a9.41,9.41,0,0,0,4.78,1.2c5.58,0,12.62-3.89,19.73-10.62,7.1,6.68,14.12,10.55,19.69,10.55a9.59,9.59,0,0,0,4.86-1.22c5.94-3.42,7.16-13.44,4.21-26C133.27,86.18,141.34,80.12,141.35,73.27ZM96.56,42.06c8.19-7.33,13.31-8.12,15.13-8.12h0a4.71,4.71,0,0,1,2.42.58c2.86,1.63,4,7.38,3.09,15a56.73,56.73,0,0,1-1,5.79,97.7,97.7,0,0,0-12.58-2.07,98.47,98.47,0,0,0-8.24-10.08C95.75,42.79,96.15,42.42,96.56,42.06ZM71.77,78.94c.78,1.5,1.61,3,2.47,4.51S76,86.49,77,88c-2.71-.39-5.34-.88-7.84-1.46C69.86,84,70.75,81.5,71.77,78.94ZM69,59.9c2.53-.59,5.18-1.08,7.93-1.46-1,1.48-1.86,3-2.76,4.59s-1.69,3-2.46,4.52Q70.18,63.65,69,59.9Zm5.21,13.34q1.86-3.93,4.09-7.86c1.5-2.62,3.11-5.17,4.77-7.61,2.91-.22,5.91-.34,9-.33s6,.12,8.89.35c1.66,2.42,3.25,5,4.75,7.55s2.88,5.22,4.12,7.83c-1.23,2.62-2.6,5.25-4.08,7.85s-3.11,5.18-4.77,7.62c-2.91.23-5.91.34-9,.34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55S75.5,75.85,74.25,73.24Zm32.86-14.77c2.72.38,5.35.87,7.84,1.45-.74,2.47-1.62,5-2.64,7.55-.79-1.5-1.61-3-2.48-4.51S108,59.93,107.11,58.47Zm2.76,24.92q1.29-2.27,2.46-4.53c1,2.6,2,5.16,2.7,7.66-2.52.59-5.17,1.07-7.92,1.45Q108.52,85.75,109.87,83.39ZM92,46.56c1.8,1.92,3.57,4,5.3,6.23-1.71-.07-3.46-.12-5.23-.12s-3.58,0-5.33.12C88.45,50.57,90.2,48.48,92,46.56Zm-22.18-12A4.82,4.82,0,0,1,72.29,34a13.11,13.11,0,0,1,5.19,1.31,39.07,39.07,0,0,1,10,6.78l1.17,1.07a98.49,98.49,0,0,0-8.16,10,98.88,98.88,0,0,0-12.65,2.06c-.44-1.94-.8-3.84-1-5.67C65.8,42,67,36.24,69.81,34.6ZM64.53,85.26a58.75,58.75,0,0,1-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91,66,59,63.05a57.63,57.63,0,0,1,5.44-1.94A97.93,97.93,0,0,0,69,73.25,98.72,98.72,0,0,0,64.53,85.26Zm23,19.1c-8.19,7.33-13.31,8.11-15.14,8.11a4.69,4.69,0,0,1-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07,56.07,0,0,1,1-5.78,99.51,99.51,0,0,0,12.58,2.06,97.17,97.17,0,0,0,8.24,10.08Zm4.57-4.51c-1.8-1.92-3.57-4-5.31-6.23,1.72.08,3.47.12,5.24.12s3.58,0,5.33-.11C95.63,95.85,93.87,97.93,92.09,99.85Zm22.18,12a4.82,4.82,0,0,1-2.48.59c-1.82,0-7-.8-15.16-8.1l-1.17-1.07a98.44,98.44,0,0,0,8.15-10,97,97,0,0,0,12.66-2.06c.44,1.94.79,3.84,1,5.67C118.27,104.42,117.12,110.18,114.27,111.81Zm10.8-28.44c-1.71.7-3.52,1.35-5.44,1.93a98.54,98.54,0,0,0-4.57-12.14,98.1,98.1,0,0,0,4.49-12,58.75,58.75,0,0,1,5.54,2c7.09,3,11.5,6.85,11.49,10.14S132.17,80.42,125.07,83.37ZM92,82.39a9.18,9.18,0,1,0-9.17-9.19A9.17,9.17,0,0,0,92,82.39ZM31,17.88V128.53H153.07V17.88ZM148.3,123.77H35.78V22.65H148.3Zm-85-33.9c-3,12.68-1.7,22.75,4.28,26.16a9.41,9.41,0,0,0,4.78,1.2c5.58,0,12.62-3.89,19.73-10.62,7.1,6.68,14.12,10.55,19.69,10.55a9.59,9.59,0,0,0,4.86-1.22c5.94-3.42,7.16-13.44,4.21-26,12.41-3.72,20.48-9.78,20.49-16.63s-8.11-13-20.58-16.73c3-12.67,1.69-22.75-4.28-26.16a9.55,9.55,0,0,0-4.79-1.2c-5.57,0-12.61,3.89-19.72,10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46,9.46,0,0,0-4.86,1.22c-5.94,3.42-7.17,13.44-4.21,26.05-12.41,3.71-20.48,9.77-20.5,16.63S50.84,86.13,63.31,89.87Zm24.21,14.49c-8.19,7.33-13.31,8.11-15.14,8.11a4.69,4.69,0,0,1-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07,56.07,0,0,1,1-5.78,99.51,99.51,0,0,0,12.58,2.06,97.17,97.17,0,0,0,8.24,10.08Zm24.79-36.89c-.79-1.5-1.61-3-2.48-4.51s-1.8-3-2.72-4.49c2.72.38,5.35.87,7.84,1.45C114.21,62.39,113.33,64.92,112.31,67.47Zm2.72,19c-2.52.59-5.17,1.07-7.92,1.45q1.41-2.22,2.76-4.58t2.46-4.53C113.37,81.46,114.28,84,115,86.52Zm-5.21-13.35c-1.23,2.62-2.6,5.25-4.08,7.85s-3.11,5.18-4.77,7.62c-2.91.23-5.91.34-9,.34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55s-2.87-5.22-4.12-7.83q1.86-3.93,4.09-7.86c1.5-2.62,3.11-5.17,4.77-7.61,2.91-.22,5.91-.34,9-.33s6,.12,8.89.35c1.66,2.42,3.25,5,4.75,7.55S108.58,70.56,109.82,73.17ZM77,88c-2.71-.39-5.34-.88-7.84-1.46.74-2.46,1.63-5,2.65-7.55.78,1.5,1.61,3,2.47,4.51S76,86.49,77,88ZM74.21,63c-.87,1.5-1.69,3-2.46,4.52Q70.18,63.65,69,59.9c2.53-.59,5.18-1.08,7.93-1.46C76,59.92,75.11,61.45,74.21,63ZM92.09,99.85c-1.8-1.92-3.57-4-5.31-6.23,1.72.08,3.47.12,5.24.12s3.58,0,5.33-.11C95.63,95.85,93.87,97.93,92.09,99.85Zm22.18,12a4.82,4.82,0,0,1-2.48.59c-1.82,0-7-.8-15.16-8.1l-1.17-1.07a98.44,98.44,0,0,0,8.15-10,97,97,0,0,0,12.66-2.06c.44,1.94.79,3.84,1,5.67C118.27,104.42,117.12,110.18,114.27,111.81Zm5.28-50.66a58.75,58.75,0,0,1,5.54,2c7.09,3,11.5,6.85,11.49,10.14s-4.41,7.16-11.51,10.11c-1.71.7-3.52,1.35-5.44,1.93a98.54,98.54,0,0,0-4.57-12.14A98.1,98.1,0,0,0,119.55,61.15Zm-23-19.09c8.19-7.33,13.31-8.12,15.13-8.12h0a4.71,4.71,0,0,1,2.42.58c2.86,1.63,4,7.38,3.09,15a56.73,56.73,0,0,1-1,5.79,97.7,97.7,0,0,0-12.58-2.07,98.47,98.47,0,0,0-8.24-10.08C95.75,42.79,96.15,42.42,96.56,42.06ZM92,46.56c1.8,1.92,3.57,4,5.3,6.23-1.71-.07-3.46-.12-5.23-.12s-3.58,0-5.33.12C88.45,50.57,90.2,48.48,92,46.56Zm-22.18-12A4.82,4.82,0,0,1,72.29,34a13.11,13.11,0,0,1,5.19,1.31,39.07,39.07,0,0,1,10,6.78l1.17,1.07a98.49,98.49,0,0,0-8.16,10,98.88,98.88,0,0,0-12.65,2.06c-.44-1.94-.8-3.84-1-5.67C65.8,42,67,36.24,69.81,34.6ZM59,63.05a57.63,57.63,0,0,1,5.44-1.94A97.93,97.93,0,0,0,69,73.25a98.72,98.72,0,0,0-4.49,12,58.75,58.75,0,0,1-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91,66,59,63.05Zm33,1a9.18,9.18,0,1,0,9.17,9.19A9.17,9.17,0,0,0,92,64Zm0,0a9.18,9.18,0,1,0,9.17,9.19A9.17,9.17,0,0,0,92,64Zm0,0a9.18,9.18,0,1,0,9.17,9.19A9.17,9.17,0,0,0,92,64Zm49.35,9.24c0-6.89-8.11-13-20.58-16.73,3-12.67,1.69-22.75-4.28-26.16a9.55,9.55,0,0,0-4.79-1.2c-5.57,0-12.61,3.89-19.72,10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46,9.46,0,0,0-4.86,1.22c-5.94,3.42-7.17,13.44-4.21,26.05-12.41,3.71-20.48,9.77-20.5,16.63s8.12,13,20.59,16.72c-3,12.68-1.7,22.75,4.28,26.16a9.41,9.41,0,0,0,4.78,1.2c5.58,0,12.62-3.89,19.73-10.62,7.1,6.68,14.12,10.55,19.69,10.55a9.59,9.59,0,0,0,4.86-1.22c5.94-3.42,7.16-13.44,4.21-26C133.27,86.18,141.34,80.12,141.35,73.27ZM96.56,42.06c8.19-7.33,13.31-8.12,15.13-8.12h0a4.71,4.71,0,0,1,2.42.58c2.86,1.63,4,7.38,3.09,15a56.73,56.73,0,0,1-1,5.79,97.7,97.7,0,0,0-12.58-2.07,98.47,98.47,0,0,0-8.24-10.08C95.75,42.79,96.15,42.42,96.56,42.06ZM71.77,78.94c.78,1.5,1.61,3,2.47,4.51S76,86.49,77,88c-2.71-.39-5.34-.88-7.84-1.46C69.86,84,70.75,81.5,71.77,78.94ZM69,59.9c2.53-.59,5.18-1.08,7.93-1.46-1,1.48-1.86,3-2.76,4.59s-1.69,3-2.46,4.52Q70.18,63.65,69,59.9Zm5.21,13.34q1.86-3.93,4.09-7.86c1.5-2.62,3.11-5.17,4.77-7.61,2.91-.22,5.91-.34,9-.33s6,.12,8.89.35c1.66,2.42,3.25,5,4.75,7.55s2.88,5.22,4.12,7.83c-1.23,2.62-2.6,5.25-4.08,7.85s-3.11,5.18-4.77,7.62c-2.91.23-5.91.34-9,.34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55S75.5,75.85,74.25,73.24Zm32.86-14.77c2.72.38,5.35.87,7.84,1.45-.74,2.47-1.62,5-2.64,7.55-.79-1.5-1.61-3-2.48-4.51S108,59.93,107.11,58.47Zm2.76,24.92q1.29-2.27,2.46-4.53c1,2.6,2,5.16,2.7,7.66-2.52.59-5.17,1.07-7.92,1.45Q108.52,85.75,109.87,83.39ZM92,46.56c1.8,1.92,3.57,4,5.3,6.23-1.71-.07-3.46-.12-5.23-.12s-3.58,0-5.33.12C88.45,50.57,90.2,48.48,92,46.56Zm-22.18-12A4.82,4.82,0,0,1,72.29,34a13.11,13.11,0,0,1,5.19,1.31,39.07,39.07,0,0,1,10,6.78l1.17,1.07a98.49,98.49,0,0,0-8.16,10,98.88,98.88,0,0,0-12.65,2.06c-.44-1.94-.8-3.84-1-5.67C65.8,42,67,36.24,69.81,34.6ZM64.53,85.26a58.75,58.75,0,0,1-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91,66,59,63.05a57.63,57.63,0,0,1,5.44-1.94A97.93,97.93,0,0,0,69,73.25,98.72,98.72,0,0,0,64.53,85.26Zm23,19.1c-8.19,7.33-13.31,8.11-15.14,8.11a4.69,4.69,0,0,1-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07,56.07,0,0,1,1-5.78,99.51,99.51,0,0,0,12.58,2.06,97.17,97.17,0,0,0,8.24,10.08Zm4.57-4.51c-1.8-1.92-3.57-4-5.31-6.23,1.72.08,3.47.12,5.24.12s3.58,0,5.33-.11C95.63,95.85,93.87,97.93,92.09,99.85Zm22.18,12a4.82,4.82,0,0,1-2.48.59c-1.82,0-7-.8-15.16-8.1l-1.17-1.07a98.44,98.44,0,0,0,8.15-10,97,97,0,0,0,12.66-2.06c.44,1.94.79,3.84,1,5.67C118.27,104.42,117.12,110.18,114.27,111.81Zm10.8-28.44c-1.71.7-3.52,1.35-5.44,1.93a98.54,98.54,0,0,0-4.57-12.14,98.1,98.1,0,0,0,4.49-12,58.75,58.75,0,0,1,5.54,2c7.09,3,11.5,6.85,11.49,10.14S132.17,80.42,125.07,83.37ZM92,82.39a9.18,9.18,0,1,0-9.17-9.19A9.17,9.17,0,0,0,92,82.39Zm-69.32,54.5V26.2L17.89,31V141.66H139.94l4.78-4.77Z"/>
    </svg>
  </StyledLogo>
)

const StyledLogo = styled.div`
  width: 50px;

  svg {
    fill: #09d3ac;
  }
`;

export default Logo

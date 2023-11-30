
# AI Visual Inspection Underbody Front - frontend


## Description

This is frontend program of AI Visual Inspecton Underbody Front. This program could capture image from multiple cam and giving judgement on every image taken. The image and judgement result stored in a queue that will be consumed after dequeue api called by scanner program.

## Tech Stacks

Language : Javascript

Framework : ReactJS

## Installation

To install node package dependency, run the following command on frontend folder

```bash
  npm install
```
    
## Config

Before running this project, you need to create config.json and .env file at backend folder. You can check the example of the config on example_config.txt and sample.env file

```
/frontend
    |- .env
```

## Program Flow

1. Images captured and infered from every camera
2. Images and inference results append to the queue
3. If the images is broken, delete the image manually
4. Scanner program send request to dequeue the results 
5. Results will be matched with standard spec of the vehicle
6. Results saved to specification class and saved in database (postgreSQL) locally.

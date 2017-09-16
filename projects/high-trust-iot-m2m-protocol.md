---
layout: project
type: project
image: ../images/projects/high-trust-iot-m2m-protocol/blockchain1-cropped.jpg
title: High Trust IoT Machine-to-Machine Protocol
permalink: projects/high-trust-iot-m2m-protocol
youtubeId: UmGlhiDVwt8
date: 2017
labels:
  - Python
  - Blockchain
  - Embedded System
  - XBee
  - LIDAR
  - Raspberry Pi
summary: Developed a high trust M2M communication protocol concept for autonomous vehicles using blockchain technology.

---

### Project Overview
The world of Internet of Things (IoT) Machine-to-Machine (M2M) communications is coming. In many cases, M2M communications will be conducted by machines that may not have previously come into contact with each other such as car-to-car communications. In the near future, cars will share data about road conditions, travel speeds, and hazards with the expectation that the data shared can be 'trusted' or at least 'verified' to some degree. Currently, high-trust autonomous communications between previously unrelated entities is essentially non-existent and yet, the need is high. Since class 4 and 5 autonomous cars are predicted to become the norm in the near future, this project focused on the development and research of a high trust machine-to-machine communication protocol for autonomous cars. Although this project primarily focused on vehicles, this concept can be adapted and generalized to secure communications between IoT devices.

{% include youtubePlayer.html id=page.youtubeId %}

### Concept Development
The embedded system robotic cars were built using both a Raspberry Pi and Arduino in conjunction with XBees, ultrasonic sensors, and LIDAR sensors to showcase secure blockchain encryption. 

Blockchain technology was utilized as an enabler to define trust relationships and secure third party communications between vehicles. To demonstrate what this technology could offer, autonomous miniature robotic cars based on Raspberry Pi and Arduino hardware were built. These cars functioned similar to Google's self-driving cars and wirelessly transmitted situational awareness information to surrounding vehicles. Adjacent cars could receive this information, determine the trusted messages, and verify the data with its own sensors to avoid obstacles and navigate through the environment around them. 

Some of the use cases include:
<ul>
<li>Device to device</li>
<li>Car to car</li>
<li>Drone to drone</li>
<li>Device/car/drone to infrastructure</li>
</ul>

<img class="ui fluid image" src="../images/projects/high-trust-iot-m2m-protocol/tworobots.jpg" data-action="zoom">

### Learning Outcomes
From this project, I learned both technical and project management skills. On the technical side, I strengthened my understanding of Python, version control, and gained more experience on how to design components into a single functioning product. In terms of project management, I learned how to effectively break down tasks within a project to smaller incremental steps that we referred to as issues. In addition, I learned to create, assign, and manage issues for project milestones through GitHub. 

Source (Raspberry Pi side): <a href="https://github.com/nathancy/Pi-Robotics" target="_blank"><i class="large github icon"></i>https://github.com/nathancy/Pi-Robotics</a> 

Source (Arduino side): <a href="https://github.com/nathancy/Arduino-Robotics" target="_blank"><i class="large github icon"></i>https://github.com/nathancy/Arduino-Robotics</a> 

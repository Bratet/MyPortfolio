// import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import educationIcon from '@iconify/icons-charm/graduate-cap';
import devIcon from '@iconify/icons-fluent-mdl2/work';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"



export default function Work() {
    const { colorMode } = useColorMode();
    // const [durantion, setDurantion] = useState(0);
    // const today = new Date()
    const mainBackTech = ['Python, ', 'Django, ', 'Django Rest Framework,', 'RESTful API,', 'Pytest,', 'Python  3rd party libraires,', 'Docker,', 'Unit Testing,', 'Scrum,', 'PostegreSQL,', 'POSTMAN,', 'Git,', 'GitHub,', 'Postgis,', 'GoogleMaps API,','Geojson.']
    const mainMP = ['Maths (analysis & algebre), ', 'Computer Science, ' , 'Python programming language, ', 'Database & SQL, ', 'physique & chemistry.']
    const mainBach = ['Artificial Intelligence, ', 'Machine Learning Theory, ', 'Data Science, ', 'IOT, ', 'Java OOP programming, ',' Database Administration, ','Relational Databases Management Systems (MySQL), ', 'Networking (OSI network model), ', 'Operating Systems (Linux) & bash scripitng, ', 'UML, ', 'English/French (TEC).']
    var mainTec = mainBackTech.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainmp = mainMP.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainbach = mainBach.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    // function monthDiff(d1, d2) {
    //   var months;
    //   months = (d2.getFullYear() - d1.getFullYear()) * 12;
    //   months -= d1.getMonth();
    //   months += d2.getMonth();
    //   return months <= 0 ? 0 : months;
    // }
    // useEffect(() => {
    //   setDurantion(monthDiff(new Date('27/07/2021'), today))
    // }, [setDurantion])
    

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 1px', borderRadius: 15, marginBottom: 10, backgroundColor: "#0CA678"}} >
            <Heading p={40}>
              Work Exprience 
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline
        
        >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="28 june 2022 - 28 august 2022 (2 months)"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={devIcon} />}
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                Backend Developer Internships
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                at PULL4YOU SERVICE S.A.R.L
              </Heading>
              <p>Development of a transport service optimized on demand : a web application that allows the user to find the shortest path that visits all the given points</p>
              <p>
                The technologies i've worked with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Box>
            <Heading p={50}>
            </Heading>
          </Box>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 1px', borderRadius: 15, marginBottom: 10, backgroundColor: "#0CA678"}} >
            <Heading p={40}>
              Education Path
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="September 2021 - Present"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={educationIcon} />}
            position = "right"
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                Artificial Intelligence Engineering
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                at National School of Computer Science and Systems Analysis (ENSIAS in French)
              </Heading>
              <p>
                The main programme : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainbach}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="September 2019 - June 2021"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={educationIcon} />}
            position = "left"
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                MP <br/>(Math, Physics)
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                at Preparatory Classes for Engineering Schools in Tangier (CPGET)
              </Heading>
              <p>
                The main program : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainmp}
                </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
      
    );
  }
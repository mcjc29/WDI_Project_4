const mongoose = require('mongoose');
const User = require('../models/user');
const Nonprofit = require('../models/nonprofit');
const Skill = require('../models/skill');


const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

User.collection.remove();
Nonprofit.collection.remove();
Skill.collection.remove();

Skill.create([
  { name: 'Accounting' },
  { name: 'Administrative / Secretarial' },
  { name: 'Advertising' },
  { name: 'Aircraft Mechanic' },
  { name: 'Android Developer' },
  { name: 'Architect' },
  { name: 'Art Curator' },
  { name: 'Auction House' },
  { name: 'Automotive' },
  { name: 'Banking' },
  { name: 'Barista' },
  { name: 'Bartender' },
  { name: 'Beautician' },
  { name: 'Big Data' },
  { name: 'Biomedical Engineer' },
  { name: 'Blue Collar Jobs' },
  { name: 'Boilermaker' },
  { name: 'Bookkeeping' },
  { name: 'Brick Mason' },
  { name: 'Broadcaster' },
  { name: 'Business Analyst' },
  { name: 'Business Development' },
  { name: 'Business Intelligence' },
  { name: 'Business Manager' },
  { name: 'Career Counselor' },
  { name: 'Carpentry' },
  { name: 'Cashier' },
  { name: 'Chef' },
  { name: 'Chiropractor' },
  { name: 'Civil Engineer' },
  { name: 'Claims Adjuster' },
  { name: 'Clinical Laboratory Technician' },
  { name: 'Cloud Computing' },
  { name: 'College Admissions' },
  { name: 'Computer' },
  { name: 'Computer Programming' },
  { name: 'Computer Systems Analyst' },
  { name: 'Concierge' },
  { name: 'Construction' },
  { name: 'Content Manager' },
  { name: 'Content Strategist' },
  { name: 'Counseling' },
  { name: 'Consulting' },
  { name: 'Custodian' },
  { name: 'Customer Service' },
  { name: 'Database Administrator' },
  { name: 'Data Analyst' },
  { name: 'Data Scientist' },
  { name: 'Dental Assistant' },
  { name: 'Dental Hygienist' },
  { name: 'Dentist' },
  { name: 'Dietician / Nutritionist' },
  { name: 'Digital Media' },
  { name: 'Editing' },
  { name: 'Electrician' },
  { name: 'EMT / Firefighter' },
  { name: 'Esthetician' },
  { name: 'Executive' },
  { name: 'Executive Assistant' },
  { name: 'Engineering' },
  { name: 'Fashion Design' },
  { name: 'Fashion Buyer' },
  { name: 'Fast Food' },
  { name: 'Finance' },
  { name: 'Financial Advisor / Planner' },
  { name: 'Flight Attendant' },
  { name: 'Front End Web Developer' },
  { name: 'Fundraiser' },
  { name: 'Graphic Design' },
  { name: 'Hair Stylist' },
  { name: 'Health Care Skills Listed by Job' },
  { name: 'Health / Medical Information Technician' },
  { name: 'Healthcare / Hospital Administration' },
  { name: 'Heavy Equipment Operator' },
  { name: 'Home Health Aide' },
  { name: 'Hospitality Industry' },
  { name: 'Hotel Front Desk / Guest Services Skills' },
  { name: 'Hotel and Resort Management' },
  { name: 'Human Resources' },
  { name: 'Information Security Analyst' },
  { name: 'Inside Sales' },
  { name: 'Insurance' },
  { name: 'Interior Design' },
  { name: 'Information Technology' },
  { name: 'Investment Banking Analyst' },
  { name: 'iOS Developer' },
  { name: 'IT Manager' },
  { name: 'IT Soft Skills' },
  { name: 'Journalist' },
  { name: 'Gardening, Landscaping, and Groundskeeping' },
  { name: 'Law Enforcement Skills' },
  { name: 'Legal' },
  { name: 'Librarian' },
  { name: 'Licensed Practical Nurse (LPN) Skills' },
  { name: 'Machinist' },
  { name: 'Maintenance and Janitorial' },
  { name: 'Makeup Artist' },
  { name: 'Management' },
  { name: 'Management Trainee' },
  { name: 'Marketing Automation Specialist / Manager' },
  { name: 'Market Research Analyst' },
  { name: 'Marketing' },
  { name: 'Massage Therapist' },
  { name: 'Mechanical Engineer' },
  { name: 'Medical Assistant' },
  { name: 'Media Planner / Buyer' },
  { name: 'Medical Secretary' },
  { name: 'Meteorologist' },
  { name: 'Museum Curator' },
  { name: 'Naturopathic Physician' },
  { name: 'Nurse Practitioner' },
  { name: 'Nursing' },
  { name: 'Nursing Assistant' },
  { name: 'Occupational Therapist' },
  { name: 'Occupational Therapy Assistant' },
  { name: 'Office Assistant' },
  { name: 'Office Manager' },
  { name: 'Optician' },
  { name: 'Painter' },
  { name: 'Paralegal / Legal Assistant' },
  { name: 'Personal Assistant' },
  { name: 'Personal Trainer' },
  { name: 'Pharmaceutical Sales' },
  { name: 'Pharmacist' },
  { name: 'Pharmacy Technician' },
  { name: 'Phlebotomist' },
  { name: 'Photography' },
  { name: 'Physical Therapy Assistant' },
  { name: 'Physical Therapist' },
  { name: 'Physician' },
  { name: 'Physician Assistant' },
  { name: 'Pilot' },
  { name: 'Pipefitter' },
  { name: 'Plumber' },
  { name: 'Policy Analyst' },
  { name: 'Product Manager' },
  { name: 'Project Manager' },
  { name: 'Public Health' },
  { name: 'Public / Non Profit Administrator' },
  { name: 'Public Relations' },
  { name: 'Radiologic Technologist' },
  { name: 'Real Estate' },
  { name: 'Receptionist' },
  { name: 'Research Assistant' },
  { name: 'Respiratory Therapist' },
  { name: 'Retail' },
  { name: 'Retail Associate' },
  { name: 'Retail Buyer' },
  { name: 'Retail Manager' },
  { name: 'Retail Merchandiser' },
  { name: 'Retail Sales' },
  { name: 'Restaurant and Food Service' },
  { name: 'Restaurant Host / Hostess' },
  { name: 'Sales' },
  { name: 'Sales Associate' },
  { name: 'Search Engine Optimization (SEO)' },
  { name: 'School Psychologist' },
  { name: 'Scrum Master' },
  { name: 'Server' },
  { name: 'Social Media' },
  { name: 'Social Work' },
  { name: 'Software Developer' },
  { name: 'Software Engineer' },
  { name: 'Software Quality Assurance (QA) Engineer' },
  { name: 'Software Sales Representative' },
  { name: 'Speech Pathologist' },
  { name: 'Surveyor' },
  { name: 'Teaching' },
  { name: 'Tech Skills Listed by Job' },
  { name: 'Tech Support' },
  { name: 'Technical Support Engineer' },
  { name: 'Technical Writer' },
  { name: 'Telecommunications Equipment Installer' },
  { name: 'Television / Film Producer' },
  { name: 'Training Coordinator' },
  { name: 'Travel Agent / Coordinator' },
  { name: 'Truck Driver' },
  { name: 'Ultrasound Technician' },
  { name: 'Underwriter' },
  { name: 'User Experience / User Interface' },
  { name: 'Veterinary Technician' },
  { name: 'Waiter / Waitress' },
  { name: 'Web Design' },
  { name: 'Wedding / Special Events Planner' },
  { name: 'Welder' },
  { name: 'Writing' }
])
  .then(skills => {
    console.log(`${skills.length} skilz created!`);
    return User.create([
      {
        username: 'CamDaMAn',
        firstName: 'Cameron',
        lastName: 'Jones',
        email: 'cameron@cameron.com',
        image:
        'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg',
        description: 'do gooder',
        skills: [{skill: skills[30]}, {skill: skills[6]}, {skill: skills[50]}],
        address: 'road street',
        linkedIn: 'https://uk.linkedin.com',
        password: 'password',
        passwordConfirmation: 'password'
      },
      {
        username: 'RuBharb',
        firstName: 'Rupesh',
        lastName: 'Bhatti',
        email: 'rupesh@rupesh.com',
        image:
        'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg',
        description: 'do gooder',
        skills: [{skill: skills[30]}, {skill: skills[6]}, {skill: skills[50]}],
        address: 'road street',
        linkedIn: 'https://uk.linkedin.com',
        password: 'password',
        passwordConfirmation: 'password'
      },

      {
        username: 'SiPot',
        firstName: 'Siobhan',
        lastName: 'Potter',
        email: 'siobhan@siobhan.com',
        image:
        'https://user-images.githubusercontent.com/28314323/32336467-5211c230-bfe7-11e7-9af5-286502b8fca1.jpg',
        description: 'do gooder',
        skills: [{skill: skills[35]}, {skill: skills[64]}, {skill: skills[59]}],
        address: 'road street',
        linkedIn: 'https://uk.linkedin.com',
        password: 'password',
        passwordConfirmation: 'password'
      },
      {
        username: 'S.O',
        firstName: 'Sandra',
        lastName: 'Okoli',
        email: 'sandra@sandra.com',
        image:
        'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg',
        description: 'do gooder',
        skills: [{skill: skills[36]}, {skill: skills[86]}, {skill: skills[60]}],
        address: 'road street',
        linkedIn: 'https://uk.linkedin.com',
        password: 'password',
        passwordConfirmation: 'password'
      },
      {
        username: 'SayPay',
        firstName: 'Sarah',
        lastName: 'Alpay',
        email: 'sarah@sarah.com',
        image:
        'https://user-images.githubusercontent.com/28314323/32336488-598e339a-bfe7-11e7-938c-77b2abcf6af0.jpg',
        description: 'do gooder',
        skills: [{skill: skills[44]}, {skill: skills[63]}, {skill: skills[78]}],
        address: 'road street',
        linkedIn: 'https://uk.linkedin.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    ])
      .then(users => {
        console.log(`${users.length} users created!`);
        return Nonprofit.create([
          {
            name: 'Shelter',
            image: 'http://www.shelter.org.uk/__data/assets/image/0008/1201499/splash-page-shelter-logo.png',
            description: 'Shelter helps millions of people every year struggling with bad housing or homelessness through our advice, support and legal services. Our advice and support services across the UK give people one-to-one, personalised help with all of their housing issues. Our free emergency helpline is open 365 days a year and is often the first port of call for people facing a housing crisis. Our solicitors provide free legal advice and attend court to help people who’ve lost their homes or are facing eviction.',
            registration: '263710',
            createdBy: users[0],
            address: 'efwfrfg',
            website: 'http://www.shelter.org.uk/',
            email: '',
            location: {
              lat: 3,
              lng: 5
            },
            skills: [skills[0], skills[2], skills[5]],
            supporters: [users[0]]
          } , {
            name: 'Miracles',
            image: 'http://www.miraclesthecharity.org/images/dove-logo.png?crc=4043984631',
            description: 'Since 1994 Miracles has been providing a vital service to those in supreme need here in the UK. Today, we are top of the calling list for Citizens Advice Bureaux, Social Workers and major children’s hospitals – including Great Ormond Street and the Royal Marsden – for "rapid response" funding on behalf of their most needy cases.',
            registration: '263710',
            createdBy: users[0],
            address: 'efwfrfg',
            website: 'http://www.miraclesthecharity.org/',
            email: '',
            location: {
              lat: 3,
              lng: 5
            },
            skills: [skills[4], skills[8], skills[66]],
            supporters: [users[0]]
          } , {
            name: 'Refugee Action',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Refugee_action_logo_with_white_background.jpg',
            description: 'At Refugee Action, we have spent 35 years helping refugees build safe, hopeful and productive new lives in the UK. Support and advice for refugees and asylum seekers struggling with the asylum process, poverty and homelessness. Support and resources for organisations working with refugees, asylum-seekers and migrants across the UK. Practical support and guidance for people who are resettling in the UK having fled conflict and persecution, and Local Authorities who are participating in Resettlement schemes.',
            registration: '342423',
            createdBy: users[4],
            address: 'sc',
            website: 'http://www.refugee-action.org.uk/',
            email: 'giving@refugee-action.org.uk',
            location: {
              lat: 3,
              lng: 5
            },
            skills: [skills[6], skills[10], skills[9]],
            supporters: [users[0]]
          } ,     {
            name: 'Luna',
            image: 'http://lunachildren.org.uk/wp-content/themes/blankslate/images/luna-childrens-charity-logo-orange.jpg',
            description: 'Luna is a child-centred charity that helps children who have experienced trauma to move forward with their lives by training those who care for them. Luna delivers training in collaboration with local partner organisations all around the world, and our model has proved to be hugely successful. We have provided CATT training in Rwanda, Uganda, South Africa, Tanzania and Malaysia, and with those supporting children in the Syrian refugee camps in Turkey, Jordan and Lebanon. In addition, we have held training in the UK  for mental health professionals from Pakistan and Nigeria.',
            registration: '1127169',
            createdBy: users[0],
            address: 'sc',
            website: 'http://lunachildren.org.uk/',
            email: 'info@lunachildren.org.uk',
            location: {
              lat: 3,
              lng: 5
            },
            skills: [skills[68], skills[17], skills[69]],
            supporters: [users[0]]
          } , {
            name: 'Migrants Resource Center',
            image: 'https://www.migrantsresourcecentre.org.uk/wp-content/uploads/2017/03/MRC-full-words-logo-150h.png',
            description: 'Migrants Resource Centre has worked for over 30 years to help migrants, refugees, and asylum seekers overcome the barriers that prevent them from fully participating in British society. In this time, we have helped tens of thousands of people secure protection in the UK, regularise their immigration status, learn English, and find work. We have helped people who are stateless and have other nationality issues secure more certain future. At MRC, our roots are in the migrant communities that we serve. Our services are delivered by a wide range of skilled and dedicated volunteers who come from all over the world. And most of our staff are themselves migrants or the children of migrants. Many started as service users or volunteers before joining the staff, and therefore understand the challenges our clients face. We are proud to see ourselves as a migrant-led organisation. But we also see ourselves as an integral part of the British communities in which we live. While our first mandate is to support migrants to integrate into British society, we know that integration must be a two-way process. And for this reason, we reach out to use our skills and time to support all members of the community in need, whether they are migrants or not. And we work closely with organisations representing other members of the community to address shared challenges.',
            registration: '291789',
            createdBy: users[0],
            address: 'sc',
            website: 'https://www.migrantsresourcecentre.org.uk/',
            email: 'info@migrants.org.uk',
            location: {
              lat: 3,
              lng: 5
            },
            skills: [skills[68], skills[17], skills[69]],
            supporters: [users[0]]
          }
        ]);
      })
      .then(nonprofits => {
        console.log(`${nonprofits.length} nonprofits created!`);
      });
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

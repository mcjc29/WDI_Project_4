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
  { name: 'Android Developer' },
  { name: 'Banking' },
  { name: 'Barista' },
  { name: 'Bartender' },
  { name: 'Bookkeeping' },
  { name: 'Business Analyst' },
  { name: 'Business Development' },
  { name: 'Business Intelligence' },
  { name: 'Business Manager' },
  { name: 'Career Counselor' },
  { name: 'Chef' },
  { name: 'Cloud Computing' },
  { name: 'College Admissions' },
  { name: 'Computer' },
  { name: 'Computer Programming' },
  { name: 'Computer Systems Analyst' },
  { name: 'Counseling' },
  { name: 'Consulting' },
  { name: 'Database Administrator' },
  { name: 'Data Analyst' },
  { name: 'Data Scientist' },
  { name: 'Digital Media' },
  { name: 'Finance' },
  { name: 'Financial Advisor / Planner' },
  { name: 'Front End Web Developer' },
  { name: 'Fundraiser' },
  { name: 'Graphic Design' },
  { name: 'Hair Stylist' },
  { name: 'Human Resources' },
  { name: 'Information Technology' },
  { name: 'iOS Developer' },
  { name: 'IT Manager' },
  { name: 'IT Soft Skills' },
  { name: 'Journalist' },
  { name: 'Law Enforcement Skills' },
  { name: 'Legal' },
  { name: 'Management' },
  { name: 'Market Research Analyst' },
  { name: 'Marketing' },
  { name: 'Medical Assistant' },
  { name: 'Nurse Practitioner' },
  { name: 'Nursing' },
  { name: 'Nursing Assistant' },
  { name: 'Office Assistant' },
  { name: 'Office Manager' },
  { name: 'Painter' },
  { name: 'Paralegal / Legal Assistant' },
  { name: 'Personal Assistant' },
  { name: 'Personal Trainer' },
  { name: 'Photography' },
  { name: 'Physical Therapy Assistant' },
  { name: 'Physical Therapist' },
  { name: 'Physician' },
  { name: 'Product Manager' },
  { name: 'Project Manager' },
  { name: 'Public Health' },
  { name: 'Public / Non Profit Administrator' },
  { name: 'Public Relations' },
  { name: 'Real Estate' },
  { name: 'Receptionist' },
  { name: 'Research Assistant' },
  { name: 'Restaurant and Food Service' },
  { name: 'Sales' },
  { name: 'Sales Associate' },
  { name: 'Search Engine Optimization (SEO)' },
  { name: 'Social Media' },
  { name: 'Social Work' },
  { name: 'Software Developer' },
  { name: 'Software Engineer' },
  { name: 'Software Quality Assurance (QA) Engineer' },
  { name: 'Software Sales Representative' },
  { name: 'Teaching' },
  { name: 'Tech Support' },
  { name: 'Technical Support Engineer' },
  { name: 'Technical Writer' },
  { name: 'Television / Film Producer' },
  { name: 'User Experience / User Interface' },
  { name: 'Waiter / Waitress' },
  { name: 'Web Design' },
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [{skill: skills[55]}, {skill: skills[68]}],
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [{skill: skills[36]}, {skill: skills[82]}, {skill: skills[60]}],
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'http://www.shelter.org.uk/',
            email: '',
            location: {
              lat: 51.52449499999999,
              lng: -0.09443899999996574
            },
            skills: [skills[0], skills[2], skills[5], skills[47], skills[7], skills[1]],
            supporters: [users[0], users[1], users[2], users[4]]
          } , {
            name: 'Refugee Action',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Refugee_action_logo_with_white_background.jpg',
            description: 'At Refugee Action, we have spent 35 years helping refugees build safe, hopeful and productive new lives in the UK. Support and advice for refugees and asylum seekers struggling with the asylum process, poverty and homelessness. Support and resources for organisations working with refugees, asylum-seekers and migrants across the UK. Practical support and guidance for people who are resettling in the UK having fled conflict and persecution, and Local Authorities who are participating in Resettlement schemes.',
            registration: '342423',
            createdBy: users[4],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'http://www.refugee-action.org.uk/',
            email: 'giving@refugee-action.org.uk',
            location: {
              lat: 51.4925145,
              lng: -0.1422247000000425
            },
            skills: [skills[66], skills[10], skills[9], skills[5], skills[67], skills[44]],
            supporters: [users[0], users[1], users[2], users[4]]
          } ,     {
            name: 'Luna',
            image: 'http://lunachildren.org.uk/wp-content/themes/blankslate/images/luna-childrens-charity-logo-orange.jpg',
            description: 'Luna is a child-centred charity that helps children who have experienced trauma to move forward with their lives by training those who care for them. Luna delivers training in collaboration with local partner organisations all around the world, and our model has proved to be hugely successful. We have provided CATT training in Rwanda, Uganda, South Africa, Tanzania and Malaysia, and with those supporting children in the Syrian refugee camps in Turkey, Jordan and Lebanon. In addition, we have held training in the UK  for mental health professionals from Pakistan and Nigeria.',
            registration: '1127169',
            createdBy: users[0],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'http://lunachildren.org.uk/',
            email: 'info@lunachildren.org.uk',
            location: {
              lat: 51.523199,
              lng: -0.1721860000000106
            },
            skills: [skills[68], skills[17], skills[69], skills[37], skills[27], skills[80]],
            supporters: [users[0], users[1], users[2], users[4]]
          } , {
            name: 'Migrants Resource Center',
            image: 'https://www.migrantsresourcecentre.org.uk/wp-content/uploads/2017/03/MRC-full-words-logo-150h.png',
            description: 'Migrants Resource Centre has worked for over 30 years to help migrants, refugees, and asylum seekers overcome the barriers that prevent them from fully participating in British society. In this time, we have helped tens of thousands of people secure protection in the UK, regularise their immigration status, learn English, and find work. We have helped people who are stateless and have other nationality issues secure more certain future. At MRC, our roots are in the migrant communities that we serve. Our services are delivered by a wide range of skilled and dedicated volunteers who come from all over the world. And most of our staff are themselves migrants or the children of migrants. Many started as service users or volunteers before joining the staff, and therefore understand the challenges our clients face. We are proud to see ourselves as a migrant-led organisation. But we also see ourselves as an integral part of the British communities in which we live. While our first mandate is to support migrants to integrate into British society, we know that integration must be a two-way process. And for this reason, we reach out to use our skills and time to support all members of the community in need, whether they are migrants or not. And we work closely with organisations representing other members of the community to address shared challenges.',
            registration: '291789',
            createdBy: users[0],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'https://www.migrantsresourcecentre.org.uk/',
            email: 'info@migrants.org.uk',
            location: {
              lat: 51.523199,
              lng: -0.1721860000000106
            },
            skills: [skills[68], skills[17], skills[69], skills[4], skills[7], skills[54]],
            supporters: [users[0], users[1], users[2], users[4]]
          }, {
            name: 'Development Media International',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheOVO0JFXzCVBtXPBb_CkkaSOMQcZDjVLc1WCoElGZhqPyjJ60Q',
            description: 'Development Media International runs evidence-based radio, TV and mobile campaigns to change behaviours and save lives in developing countries. We ran the first scientific trial to show that radio can change behaviours. We design and run large-scale research studies to generate evidence that mass media campaigns can change behaviours in developing countries.  ',
            registration: '291789',
            createdBy: users[0],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'http://www.developmentmedia.net/',
            email: 'info@migrants.org.uk',
            location: {
              lat: 51.523199,
              lng: -0.1721860000000106
            },
            skills: [skills[68], skills[77], skills[69], skills[76], skills[57], skills[81]],
            supporters: [users[0], users[1], users[2], users[4]]
          }, {
            name: 'Evidence Action',
            image: 'https://static1.squarespace.com/static/546f9316e4b0ced8102e4c74/t/547117d3e4b031c87aee695f/1512742275649/?format=1500w',
            description: 'Evidence Action scales evidence-based and cost-effective programs to reduce the burden of poverty for millions of people. Our approach fills the gap between research about what works and solutions for people in need. We operate in ten countries across the globe and positively impact the lives of hundreds of millions every year in a measurable way. An estimated 315,000 children under the age of five die from diarrhea each year, often as a result of unsafe water. Childhood diarrhea is still the second-leading cause of childhood mortality. Dispensers for Safe Water helps rural communities install a chlorine dispenser directly allowing users to add exactly half a teaspoon of diluted chlorine to a jerry can before filling the can with water. The water stays clean for two to three days. At a cost of $0.98 cents per person per year, Dispensers for Safe Water is a proven, innovative, and cost-effective approach to increase rates of household chlorination.',
            registration: '291789',
            createdBy: users[0],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'https://www.evidenceaction.org/',
            email: 'info@evidenceaction.org',
            location: {
              lat: 51.523199,
              lng: -0.1721860000000106
            },
            skills: [skills[28], skills[22], skills[55], skills[74], skills[67], skills[24]],
            supporters: [users[0], users[1], users[2], users[4]]
          } , {
            name: 'Possible Health',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeJi16Z2AqlV0Fc-YgjjrqxWZZgDuL0vAAmw7d4laJlhCcAtncA',
            description: 'Everyone, from the foothills of the Himalayas to the streets of New York City, deserves high-quality, affordable healthcare. Yet 400 million people worldwide do not have access to essential healthcare services. Our integrated healthcare model operates from hospital to home. Our work starts in rural Nepal.',
            registration: '291789',
            createdBy: users[0],
            address: 'Unit R, Reliance Wharf, Hertford Road, London N1 5EW, United Kingdom',
            website: 'https://possiblehealth.org/',
            email: 'info@evidenceaction.org',
            location: {
              lat: 51.523199,
              lng: -0.1721860000000106
            },
            skills: [skills[77], skills[27], skills[74], skills[44], skills[33], skills[67]],
            supporters: [users[0], users[1], users[2], users[4]]
          }
        ]);
      })
      .then(nonprofits => {
        console.log(`${nonprofits.length} nonprofits created!`);
      });
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

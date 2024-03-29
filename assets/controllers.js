
app.controller("SkillsCtrl", function($rootScope, $scope, $http, $location) {

  $scope.skills=[{type:'Languages',value:['Python','Java Script','C','Html','Css'],
                  value_hash:[{langName:'Python',width:'90%'},{langName:'Javascript',width:'80%'},
                  {langName:'C',width:'70%'},
                   {langName:'Html',width:'80%'},
                    {langName:'Css',width:'80%'},
                    {langName:'Ruby',width:'80%'},
                    {langName:'Java',width:'80%'}
                  ]},


                 
                  {type:'Web Frameworks',value:['Passport Js','Express Js','Node Js','Mongo Db'], 
                   value_hash:[
                   {langName:'Passport Js',width:'50%'},
                   {langName:'Express Js',width:'50%'},
                  {langName:'Node Js',width:'50%'},
                   {langName:'Mongo Db',width:'50%'},
                    {langName:'EJS',width:'50%'}
                  ]
                },



                  {type:' Tools and Cloud',value:['git'],
                  value_hash:[{langName:'git',width:'95%'},{langName:'Qlik View',width:'95%'},{langName:'Qlik Sense',width:'95%'}, {langName:'AWS',width:"60%"}]
                },

                  {type:'Machine Learning',value:['Cnn','Tensor flow','Keras'],
                  value_hash:[{langName:'Cnn',width:'35%'},{langName:'Tensor Flow',width:'35%'},{langName:'Keras',width:'35%'}]

                }]

});

app.controller("ExpCtrl", function($scope, $http, $rootScope, $location) {
  
  $scope.expName=[{title:'Software Development Engineer II',location:'Amazon Web Services',
  description:['Part of Service Quotas team, which provides customers a one stop shop to view and manage their AWS Quotas',
  'Develop Api’s and features which enable customers to request “Quota increases” for AWS resources',
   'Reduce Service Quotas Region Expansion time from 5 months to 2 months'
  ],duration:'March 2020-Present'},
    {title:'Research Assistant',location:'The Center For Excellence In Wireless and Information Technology',
  description:['Performed extensive evaluations and analysis on V -Mac (A data centric Mac layer Architecture)',
  'Analyze the loss and latency of VMAC and compare it to Ad-hoc','Developed user-space code for CRC (Cyclic Redundancy Check)'
  ,'Developed modular Python code to analyze patterns in packet loss using statistical measures like probability Mass Functions and various Pattern Recognition Algorithms',
  'Implemented support for multi-cast video transmission in an Ad hoc network'
  ],duration:'Jan 2019-August 2019'},
    {title:'Application Development Analyst',location:'Accenture Solutions Pvt Ltd'
    ,description:['Developed Qlik View/Qlik Sense dashboards for clients in the healthcare domain.',
    'Developed Phone Staffing Analysis (Erlang B calculation) dashboard by overcoming tool limitations',
    'Spearheaded the initial development of Qlik Sense Mashups using responsive design and JavaScript.','Won the Accenture Celebrates Excellence Award in the “Future Ready Skill” category'
    ], duration:'May 2016-July 2018'},
    ];
   
});

app.controller("ProjCtrl", function($location, $scope, $http, $rootScope) {
  
  $scope.project=[
  {title:'Posture Recognition using Acoustics',tools:['Python','Android','Signal Processing','Tensor Flow','Cnn'],gitshortRepo:"git:aashishravindran/PostureRecognition",gitrepo:"https://github.com/aashishravindran/PostureRecognition",
  description:["A Machine Learning Model to identify body Postures like sitting and standing using Acoustics."
  ,"By filtering out the noise, we were able to isolate the face region echoes to use for model training"]},

  {title:'Analysis of Cyclic Redundancy Check',
  tools:['Python'],
  gitshortRepo:"",gitrepo:""
  ,description:["Developed python scripts to perform byte level analysis of CRC by leveraging metrics like loss burst length and interval",
                "Helped identify patterns in missing bytes across runs and receivers and reduced analysis time by 80%"]}
  ,
   {title:'Video Quantification',
  tools:['Open CV', 'Image Processing'],
  gitshortRepo:"",gitrepo:""
  ,description:["Implemented standard video quantification metrics to analyze frame loss for multi-cast",
  "By comparing raw pixel values, we were able to identify overall frame loss and % of pixels loss within a frame"]}

   ];

});


app.controller("EducationCtrl", function($location, $scope, $http, $rootScope) {


$scope.education=[{degree:'Master Of Science',in:'Computer Engineering',university:'Stony Brook University',duration:'Aug 2018 - Dec 2020'
,courses:['Mobile Sensing Systems','Cyber Physical Systems','Wireless Communication','Digital Image Processing','Computer Aided Design',
'Topics in Electrical Sciences','System Spec and Modeling'],cgpa:'3.64/4.00'},

{degree:'Bachelor of Engineering',in:'EEE',university:'Anna University',duration:'June 2012 - April 2016'
,courses:['Embedded Systems','Control Systems','Digital Signal Processing','Power Systems','Digital Electronics'],cgpa:'8.03/10.00'}
]


});
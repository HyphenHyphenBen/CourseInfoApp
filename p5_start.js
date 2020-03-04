let buttons = [];
let cNames = ['SEE 100  <br />  Engineering Graphics', 'SEE 101W  <br />  Professional Writing', 'SEE 110 <br /> Energy & Society', 'SEE 111  <br />  Energy Solutions I', 'SEE 221  <br />  Statics & Mechanics', 'SEE 222  <br />  Engineering Materials', 'SEE 224  <br />  Thermodynamics', 'SEE 225  <br />  Fluid Mechanics', 'SEE 230  <br />  Electric Circuits', 'SEE 231  <br />  Electronic Devices',
'SEE 241  <br />  Measurement & Forecasting', 'SEE 242  <br />  Computational Methods', 'SEE 251  <br />  Machines and Energy', 'SEE 300  <br />  Business of Engineering', 'SEE 310  <br />  Energy Solutions II', 'SEE 324  <br />  Heat & Mass Transfer', 'SEE 325  <br />  Mechanical Design', 'SEE 331  <br />  Power Electronics', 'SEE 332  <br />  Power Systems Design', 'SEE 333  <br />  Networks & Communication',
'SEE 341  <br />  Signals & Systems', 'SEE 342  <br />  Feedback Control', 'SEE 351 Bioprocess Engineering', 'SEE 352  <br />  Power Generation', 'SEE 354  <br />  Energy Storage', 'SEE 402  <br />  Professional Ethics', 'SEE 410W  <br />  Energy Design Project I', 'SEE 411  <br />  Energy Design Project II', 'SEE 460  <br />  Additive Manufacturing', 'SEE 461  <br />  Electronics Manufacturing',
'SEE 462  <br />  Manufacturing Processes', 'SEE 463  <br />  Embedded Computer Systems', 'PHYS 140  <br />  Mechanics & Modern Physics I', 'PHYS 141  <br />  Optics, Elec. & Magnetism', 'CHEM 121  <br />  General Chemistry & Lab', 'CMPT 130  <br />  Computer Programming I', 'CMPT 135 <br /> Computer Programming II', 'BUS 238  <br />  Entrepreneurship & Innovation', 'REM 321  <br />  Ecological Economics', 'GEOG 323  <br />  Industrial Location', 'GEOG 324  <br />  Transportation Geography',
'GEOG 362  <br />  Urban Geography', 'MATH 151 <br /> Calculus I', 'MATH 152 <br /> Calculus II', 'MATH 251  <br />  Calculus III', 'MATH 232  <br />  Linear Algebra', 'MATH 260  <br />  Differential Equations','','','',''];
let cNamesB = ['SEE 100 Engineering Graphics', 'SEE 101W Professional Writing', 'SEE 110 Energy & Society', 'SEE 111 Energy Solutions I', 'SEE 221 Statics & Mechanics', 'SEE 222  Engineering Materials', 'SEE 224 Thermodynamics', 'SEE 225 Fluid Mechanics', 'SEE 230 Electric Circuits', 'SEE 231 Electronic Devices',
'SEE 241 Measurement & Forecasting', 'SEE 242 Computational Methods', 'SEE 251 Machines and Energy', 'SEE 300 Business of Engineering', 'SEE 310 Energy Solutions II', 'SEE 324 Heat & Mass Transfer', 'SEE 325 Mechanical Design', 'SEE 331 Power Electronics', 'SEE 332 Power Systems Design', 'SEE 333 Networks & Communication',
'SEE 341 Signals & Systems', 'SEE 342 Feedback Control', 'SEE 351 Bioprocess Engineering', 'SEE 352 Power Generation', 'SEE 354 Energy Storage', 'SEE 402 Professional Ethics', 'SEE 410W Energy Design Project I', 'SEE 411 Energy Design Project II', 'SEE 460 Additive Manufacturing', 'SEE 461 Electronics Manufacturing',
'SEE 462 Manufacturing Processes', 'SEE 463 Embedded Computer Systems', 'PHYS 140 Mechanics & Modern Physics I', 'PHYS 141 Optics, Elec. & Magnetism', 'CHEM 121 General Chemistry & Lab', 'CMPT 130 Computer Programming I', 'CMPT 135 Computer Programming II', 'BUS 238 Entrepreneurship & Innovation', 'REM 321 Ecological Economics', 'GEOG 323 Industrial Location', 'GEOG 324 Transportation Geography',
'GEOG 362 Urban Geography', 'MATH 151 Calculus I', 'MATH 152 Calculus II', 'MATH 251 Calculus III', 'MATH 232 Linear Algebra', 'MATH 260 Differential Equations','','','',''];
let creditsArray = ['3', '3', '3', '4', '4', '3',
'3', '4', '4', '4', '3', '3', '3', '3', '4', '3', '3', '4', '3', '3', '3', '4', '3', '3', '3', '2', '3', '3', '3', '3',
'3', '3', '4', '4', '4', '3', '3', '3', '4', '4', '4', '4', '3', '3', '3', '3', '3', '', '', '', '', '', '', ''];
let descArray = ['Introduction to graphical communication in the context of engineering design. Students learn to think and communicate visually. With the use of computer aided design (CAD) tools, students learn the theory and practice of design by dissecting, graphically representing, and redesigning products. Students with credit for ENSC 104, MSE 100, or IAT 106 may not take this course for further credit. ', 'Fundamentals of communicating technical information clearly and concisely for professional engineers. A focus on communicating persuasively about various contemporary technical, social, ethical and environmental issues with technical and non-technical audiences. Students will practice providing constructive feedback to peers, giving presentations and working in a team. Students with credit for CMPT 105W, ENSC 102, ENSC 105W, or MSE 101W may not take this course for further credit. Writing. ', 'Energy availability and sources, environmental consequences of energy supply and consumption, and societal impacts. Explores the environmental, economic, social, and political implications of the choices a society makes to meet its energy needs. Definitions of sustainability. Special emphasis on communication skills. ', 'Introduction to the process of sustainable engineering design. Historical perspective on role of energy, resources and technology in society. Development and demonstration of sustainability thinking through research, case study and design project undertaken by teams of students with integration of socio-economic factors and planning. Course introduces Project Based Learning methods.', 'Introduction to solid mechanics including statics, stress, strain, and deformation. Equilibrium conditions, axial loading, torsional loading, pure bending, stresses and deflections in rods and beams. Students with credit for ENSC 281, MSE 221, or ENSC 385 may not take this course for further credit.', 'Introduction to engineering materials by control of their structures to achieve different properties and performance. Techniques for modern materials engineering practice. Covers crystal and non-crystal structures and instruments for structure determination; principles of material failure, polymers, ceramics, nano-materials, and composites; electronic materials, and electro-chemical energy materials; quality control and reliability. Prerequisite: PHYS 140, CHEM 121. Students with credit for MSE 220 or ENSC 330 may not take this course for further credit. ',
'Basic energy concepts and definitions; first and second laws of thermodynamics; ideal and real gases; thermodynamic properties; with emphasis on analysis and applications to energy systems engineering. Prerequisite: MATH 251.', 'The fundamentals of fluid mechanics for engineers, emphasizing the basics of fluid statics and fluid motion, with applications in energy system engineering. Prerequisite: PHYS 140, MATH 251, MATH 310. Students with credit for ENSC 283 or MSE 223 may not take this course for further credit. ', 'Fundamental elements of electrical circuits; circuits laws; series and parallel circuits; operational amplifiers; network theorems; nodal and mesh methods; analysis of natural and step response of first and second order circuits; real, reactive and rms power. Covers worker safety implications of electricity, and safety of common laboratory practices such as soldering. Prerequisite: PHYS 141, MATH 232. Corequisite: MATH 310. Students with credit for ENSC 220 or MSE 250 may not take this course for further credit.', 'Analysis of the basic electronic components, amplifiers, diodes, semiconductors, transistors and MOSFETs. Introduction to specific instrumentation, including actuators and sensors. Design of electronic circuits based on real world scenarios. Prerequisite: SEE 230. Students with credit for MSE 251 or ENSC 225 may not take this course for further credit. ', 'An introduction to methods for collecting and analysing engineering data. Topics include engineering data representation, probability density functions, engineering measurements, error analysis, test of hypotheses, regression, and design of experiments. Prerequisite: PHYS 141, MATH 232. Corequisite: MATH 251. Students with credit for ENSC 280, MSE 210, PHYS 231, or STAT 270 may not take this course for further credit.', 'Apply numerical methods to solve engineering problems with an emphasis on sustainable energy engineering. Prerequisite: MATH 152, MATH 232. Students with credit for MACM 316 or MSE 211 may not take this course for further credit.', 'Principles, operation, and analysis of electromechanical energy conversion systems and their applications. Prerequisite: SEE 230, SEE 221, MATH 310.', 'Economic and entrepreneurial concepts important to engineers who manage projects, run businesses, or need to decide on the most efficient method for accomplishing a task. Topics include: financial accounting and metrics, economic equivalence, rates of return, depreciation, income taxes, project and cost-benefit analyses, capital budgeting, financing methods, risk and uncertainty, business plans. Prerequisite: A minimum of 75 units. Students with credit for ENSC 201, ENSC 311, ENSC 410, ENSC 411, or MSE 300 may not take this course for further credit.', 'Integrated design methodology for sustainable engineering problems; implementation through an energy system project undertaken in a project based learning environment. Introduction to modelling, simulation and optimization of energy systems. Global and local regulatory and policy frameworks. Demonstration of integrated sustainability thinking through design project, report and presentation. Special emphasis on communication skills. Prerequisite: Completion of one co-op work term; SEE 251, 224, 242.', 'Introduces the basic principles of heat and mass transfer with analysis and application to real-world sustainable energy systems. Prerequisite: PHYS 141, SEE 224, SEE 225. ', 'Introduction and application of Finite Element Analysis (FEA) to energy systems design problems involving engineering mechanics, heat transfer and machine elements. Includes an introduction to commercial FEA software and applications to practical problems. Concepts relating to engineering mechanics and machine elements are developed in the context of design projects. Prerequisite: SEE 100, SEE 221, SEE 222, SEE 324. ', 'Introduction to the fundamentals of power electronic circuits, components, and operation, and principles of electric power conversion in DC and AC applications. Prerequisite: SEE 231. Students with credit for MSE 353 may not take this course for further credit.', 'Interconnected power systems including generators, transformers, electric motors and transmission lines; active and reactive power flow; symmetrical components; symmetrical and unsymmetrical short circuit fault calculations; protection systems, circuit breakers, transient stability, and grid voltage and frequency control. Labs, field trips and projects related to power grid operation, control, and design. Prerequisite: SEE 251, SEE 331.', 'Fundamentals of communication networks: reference models, layered architecture. Physical layer analysis and design. Performance analysis of communication protocols at the data link, network, and transport layers. Medium access control, congestion control, routing. Network security, privacy, and social issues. Tools for simulation and analysis of communication networks. Prerequisite: SEE 341.', 'Modelling and analysis of continuous and discrete signals using linear techniques. Laplace transforms; methods for basic modelling of physical systems; discrete and continuous convolution; impulse and step response; transfer functions and filtering; continuous Fourier transform and its relationship to the Laplace transform; frequency response and Bode plots; sampling; Z-transform. Prerequisite: SEE 242, SEE 230. Students with credit for MSE 280 or ENSC 380 may not take this course for further credit. ', 'Fundamentals of feedback control system design and analysis, including practical and theoretical aspects. Significant lab component in which students design controllers and evaluate their robustness to modeling errors and nonlinearities. Prerequisite: SEE 341. Students with credit for ENSC 383 or MSE 381 may not take this course for further credit. ', 'Combines biotechnology and engineering for materials and energy harvesting from renewable feedstocks. Covers fundamental biomolecular research on proteins, enzymes, microbes, biosensors, bioseparations and bioreactors. Applications in food processing preservation; biofuel; air and wastewater treatment; supramolecular materials for solar energy/photosynthesis; microfluidics for bioreactors; DNA chips; bioenergy; bio fuel cells; pulp/paper. Prerequisite: MATH 310, SEE 224. Corequisite: SEE 324. ', 'Application of thermodynamics, chemistry, and transport physics to energy conversion technologies and systems. Analysis of energy conversion systems with emphasis on efficiency, performance, and environmental impact. Prerequisite: SEE 222, SEE 224, SEE 331. ', 'The characteristics, applications, limitations, and environmental impacts of various energy storage technologies and techniques are analyzed, compared and implemented in a lab setting. Electrochemical, mechanical, thermal and emerging energy storage options are considered. Prerequisite: SEE 222, SEE 331, SEE 324. ', "An introduction to the engineering profession, law and ethics, and the engineers' responsibility to society. Students will explore issues related to worker and public safety and the social implications and environmental impacts of engineering. Includes how to successfully negotiate the transition to the next career stage. Special emphasis on communication skills. Prerequisite: Minimum of 100 units; SEE 110. Students with credit for ENSC 406 or MSE 402 may not take this course for further credit.", 'This is the first course in a team-based, two-course capstone sequence. Focuses on project management, technical writing skills, and teamwork skills and strategies within the context of an engineering design project. Documentation topics cover proposals, functional and design specifications, progress reports and user manuals. An interim project report and presentation is required. SEE 411 must be taken in the term directly following the successful completion of SEE 410W. Grades awarded in SEE 410W are conditional on the successful completion of SEE 411 in the subsequent term. Prerequisite: 100 units; 2 completed co-op terms; SEE 100, SEE 101W, SEE 310. SEE students cannot take MSE 410, MSE 411, ENSC 405W or ENSC 440 for credit. Writing.', 'This is the second course in the team-based, two-course capstone sequence. Students synthesize their learning across the SEE program to research, design, build and test the hardware implementation of a working system. Includes a shop training workshop, engineering standards on how to design for safety, and human factors. A final report and presentation is required. Prerequisite: SEE 410W. Must be taken in the term immediately following 410W. In order to obtain credit, students must successfully complete both SEE 410W and SEE 411. SEE students cannot take MSE 410, MSE 411, ENSC 405W or ENSC 440 for credit. ', 'Additive manufacturing processes; Design for additive manufacturing; Problem-based additive manufacturing, Project-based additive manufacturing; Light-based 3D printing, Metal 3D printing. Extrusion-based 3D printing; 3D printed electronics; Direct digital manufacturing; 4D printing. Prerequisite: SEE 100, SEE 221, SEE 222. \n \nAdditional "One of" Options: ENSC 450 - VLSI Systems Design; ENSC 495 - Introduction to Microelectronic Fabrication; MSE 480 - Manufacturing Systems; MSE 481 - Industrial Control Systems', 'Electronics manufacturing and assembly technologies and processes in the context of sustainability. PCB and interconnect technologies, component selection and handling, material properties and selection, thermal, mechanical and environmental effects, product testing, environmental and legal standards. Prerequisite: SEE 221, SEE 231. \n \nAdditional "One of" Options: ENSC 450 - VLSI Systems Design; ENSC 495 - Introduction to Microelectronic Fabrication; MSE 480 - Manufacturing Systems; MSE 481 - Industrial Control Systems',
'Manufacturing processes and Engineering materials in the context of sustainable manufacturing. Manufacturing technologies and process flow. Productivity and green manufacturing practices. Engineering material selection. Manufacturing processes including forming, separating, fabrication, conditioning and finishing. Prerequisite: SEE 221, SEE 310. \n \nAdditional "One of" Options: ENSC 450 - VLSI Systems Design; ENSC 495 - Introduction to Microelectronic Fabrication; MSE 480 - Manufacturing Systems; MSE 481 - Industrial Control Systems', 'Implementation and design of embedded computer systems used in various real-time applications including energy systems, power electronics, and automation. Prerequisite: CMPT 130, SEE 231. \n \nAdditional "One of" Options: ENSC 450 - VLSI Systems Design; ENSC 495 - Introduction to Microelectronic Fabrication; MSE 480 - Manufacturing Systems; MSE 481 - Industrial Control Systems', 'A general calculus-based introduction to mechanics taught in an integrated lecture-laboratory environment. Topics include translational and rotational motion, momentum, energy, gravitation, and selected topics in modern physics. Prerequisite: BC Principles of Physics 12, or PHYS 100 or equivalent, with a minimum grade of C-. Corequisite: MATH 150 or 151 or 154. Students with credit for PHYS 125 or 120 or 101 may not take this course for further credit. Quantitative/Breadth-Science. ', 'A general calculus-based introduction to electricity, magnetism and optics taught in an integrated lecture-laboratory environment. Topics include electricity, magnetism, simple circuits, optics and topics from applied physics. Prerequisite: PHYS 120 or PHYS 125 or PHYS 140, with a minimum grade of C-, or PHYS 101 with a minimum grade of B. Corequisite: MATH 152 or MATH 155. Students with credit for PHYS 126 or 121 or 102 may not take this course for further credit. Quantitative/Breadth-Science. ', "Atomic and molecular structure; chemical bonding; thermochemistry; elements; periodic table; gases liquids, solids, and solutions. This course includes a laboratory component. Prerequisite: Chemistry 12 with a minimum grade of C, or CHEM 109 or 111 with a minimum grade of C-. Students with credit for CHEM 120 or 123 may not take this course for further credit. Quantitative/Breadth-Science.", 'An introduction to computing science and computer programming, using a systems oriented language, such as C or C++. This course introduces basic computing science concepts. Topics will include: elementary data types, control structures, functions, arrays and strings, fundamental algorithms, computer organization and memory management. Prerequisite: BC Math 12 (or equivalent, or any of MATH 100, 150, 151, 154, or 157). Students with credit for CMPT 102, 120, 128 or 166 may not take this course for further credit. Students who have taken CMPT 125, 129 or 135 first may not then take this course for further credit. Quantitative/Breadth-Science. ', 'A second course in systems-oriented programming and computing science that builds upon the foundation set in CMPT 130 using a systems-oriented language such as C or C++. Topics: a review of the basic elements of programming; introduction to object-oriented programming (OOP); techniques for designing and testing programs; use and implementation of elementary data structures and algorithms; introduction to embedded systems programming. Prerequisite: CMPT 130. Students with credit for CMPT 125, 126, or 129 may not take this course for further credit. Quantitative. ', 'Students will build collaborative and creative skills necessary to become effective innovators through hands-on application via interdisciplinary teamwork. Entrepreneurship and innovation of all types will be addressed including social, commercial, creative, sustainable and technological perspectives. Prerequisite: 12 Units. Breadth-Social Sciences. ', 'Introduces students to the concepts and methods of ecological economics. Provides students with grounding in the core principles of conventional economics applied to the environment but then extends this to the integration of economics and ecology to create a new ecological-economic understanding of environmental change and sustainability. Prerequisite: 45 units. Students with credit for ENV 321 cannot take REM 321 for further credit. Breadth-Social Sciences. ', 'An examination of the factors affecting industrial location and the geographic organization of production systems within and among firms from the perspectives of national, regional and urban development. Prerequisite: At least 45 units, including GEOG 100. ', 'An empirical and theoretical examination of the geographical aspects of transportation systems. Prerequisite: At least 45 units, including GEOG 100. ', 'Current concepts and approaches in urban geography regarding the development of built environments. Central concerns are the relationships between urbanization and the state, capital, and civil society at various scales. Prerequisite: At least 45 units, including GEOG 100. Students with credit for GEOG 362W may not take this course for further credit. ', "Designed for students specializing in mathematics, physics, chemistry, computing science and engineering. Logarithmic and exponential functions, trigonometric functions, inverse functions. Limits, continuity, and derivatives. Techniques of differentiation, including logarithmic and implicit differentiation. The Mean Value Theorem. Applications of differentiation including extrema, curve sketching, Newton's method. Introduction to modeling with differential equations. Polar coordinates, parametric curves. Prerequisite: Pre-Calculus 12 (or equivalent) with a grade of at least A, or MATH 100 with a grade of at least B, or achieving a satisfactory grade on the Simon Fraser University Calculus Readiness Test. Students with credit for either MATH 150, 154 or 157 may not take MATH 151 for further credit. Quantitative.", 'Riemann sum, Fundamental Theorem of Calculus, definite, indefinite and improper integrals, approximate integration, integration techniques, applications of integration. First-order separable differential equations and growth models. Sequences and series, series tests, power series, convergence and applications of power series. Prerequisite: MATH 150 or 151; or MATH 154 or 157 with a grade of at least B. Students with credit for MATH 155 or 158 may not take this course for further credit. Quantitative. ', "Rectangular, cylindrical and spherical coordinates. Vectors, lines, planes, cylinders, quadric surfaces. Vector functions, curves, motion in space. Differential and integral calculus of several variables. Vector fields, line integrals, fundamental theorem for line integrals, Green's theorem. Prerequisite: MATH 152; or MATH 155 or MATH 158 with a grade of at least B. Recommended: It is recommended that MATH 240 or 232 be taken before or concurrently with MATH 251. Quantitative. ", 'Linear equations, matrices, determinants. Introduction to vector spaces and linear transformations and bases. Complex numbers. Eigenvalues and eigenvectors; diagonalization. Inner products and orthogonality; least squares problems. An emphasis on applications involving matrix and vector calculations. Prerequisite: MATH 150 or 151; or MACM 101; or MATH 154 or 157, both with a grade of at least B. Students with credit for MATH 240 make not take this course for further credit. Quantitative. ', 'First-order differential equations, second- and higher-order linear equations, series solutions, introduction to Laplace transform, systems and numerical methods, applications in the physical, biological and social sciences. Prerequisite: MATH 152; or MATH 155/158 with a grade of at least B, MATH 232 or 240. Quantitative. ', '', '', '', '', '', '', ''];
let buttonIDPos = [];

let col  = [];

let adjX = -30;
let adjY = 37;

//Button Binary options
let Z =[];
for (let x = 0; x<cNames.length; x++) {
  Z[x] = 0;
}
//Active colors
for (x=0; x<cNames.length; x++) {
  col[x] = [255, 255, 255];
}
//Default Color
let dc = [11, 139, 186];
//PreReq Color
let prc = [76, 175, 80];
//Selected Color
let sc = [74, 26, 89];
//CoreReq Color
let crc = [235, 162, 16];
//Proceeding Color
let pc = [150, 43, 43];
//Blank Color
let bc = [255, 255, 255];
//Black Color
let bX = 200;
let blck = [bX, bX, bX];
// ProProceeding Color
let ppc = [56, 0, 0];

//More Colors
let SEEbdr = [0, 0, 0];
let SEE100BG = [135, 197, 255];
let SEE200BG = [122, 191, 255];
let SEE300BG = [107, 184, 255];
let SEE400BG = [94, 178, 255];
let PHYSBG = [148, 212, 144];
let GEOGBG = [235, 216, 152];
let CHEMBG = [253, 255, 135];
let CMPTBG = [230, 167, 252];
let MATHBG = [255, 195, 135];
let BUSBG = [214, 214, 214];
let PHYSbdr = [148, 212, 144];
let GEOGbdr = [235, 216, 152];
let CHEMbdr = [253, 255, 135];
let CMPTbdr = [230, 167, 252];
let MATHbdr = [255, 195, 135];
let BUSbdr = [214, 214, 214];
//Border Default Color Array
let bdca = [];
for (let x = 0; x<4; x++) {
  bdca[x] = SEE100BG;
}
for (let x = 4; x<13; x++) {
  bdca[x] = SEE200BG;
}
for (let x = 13; x<25; x++) {
  bdca[x] = SEE300BG;
}
for (let x = 25; x<32; x++) {
  bdca[x] = SEE400BG;
}
for (let x = 32; x<34; x++) {
  bdca[x] = PHYSbdr;
}
bdca[34] = CHEMbdr;
for (let x = 35; x<37; x++) {
  bdca[x] = CMPTbdr;
}
for (let x = 37; x<39; x++) {
  bdca[x] = BUSbdr;
}
for (let x = 39; x<42; x++) {
  bdca[x] = GEOGbdr;
}
for (let x = 42; x<47; x++) {
  bdca[x] = MATHbdr;
}
for (let x = 47; x<51; x++) {
  bdca[x] = BUSbdr;
}


//Background Default Color Array
let bgdca = [];
for (let x = 0; x<4; x++) {
  bgdca[x] = SEE100BG;
}
for (let x = 4; x<13; x++) {
  bgdca[x] = SEE200BG;
}
for (let x = 13; x<25; x++) {
  bgdca[x] = SEE300BG;
}
for (let x = 25; x<32; x++) {
  bgdca[x] = SEE400BG;
}
for (let x = 32; x<34; x++) {
  bgdca[x] = PHYSBG;
}
bgdca[34] = CHEMBG;
for (let x = 35; x<37; x++) {
  bgdca[x] = CMPTBG;
}
for (let x = 37; x<39; x++) {
  bgdca[x] = BUSBG;
}
for (let x = 39; x<42; x++) {
  bgdca[x] = GEOGBG;
}
for (let x = 42; x<47; x++) {
  bgdca[x] = MATHBG;
}
for (let x = 47; x<51; x++) {
  bgdca[x] = BUSBG;
}

//Text Default Color Array
let tdca = [];

//Button Size
let bs = 130;
let bsp = bs+2;
let bsH = 70;
let bspH = bsH+30;

//Text Area
let W = 400;
let H  = 474;

function setup() {
  createCanvas(windowWidth, windowHeight+200);
  background(pc);
  
  textFont('Verdana');
  
  //Button Positions
  let startpos = [];
  startpos = [40,40];
  let shft = 30;
  
  //Create Text Area
  /*
  fill(255);
  stroke(255);
  rect(bsp*8+5+adjX, 5+adjY, W, H);
  */
  
  //Outlines
  fill(255);
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0],startpos[1],bsp*6+6,bsH*2+38);
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0],startpos[1]+bspH*2,bsp*6+6,bsH*2+38);
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0],startpos[1]+bspH*4,bsp*6+6,bsH+8);
  //Year 4
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0],startpos[1]+bspH*5,bsp*7+6+shft*3,bsH*2+shft*3+8);
  stroke(144,144,144,0);
  strokeWeight(3);
  rect(startpos[0]+shft,startpos[1]+bspH*5+shft,bsp*6+6,bsH+8);
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0]+shft,startpos[1]+bspH*6+shft,bsp*3+6,bsH+8);
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0]+shft+bsp*3+30,startpos[1]+bspH*6+shft,bsp*4+6,bsH+8);
  //Maths
  stroke(pc);
  strokeWeight(3);
  rect(startpos[0]+bsp*6+30,startpos[1],bsp+6,bspH*4+bsH+8);
  
  //Outline Labels
  textSize(14);
  stroke(pc);
  fill(255);
  text('Year 1', startpos[0],startpos[1]-2);
  text('Year 1 Maths', startpos[0]+bsp*6+30,startpos[1]-2);
  text('Year 2', startpos[0],startpos[1]+bspH*2-2);
  text('Year 3', startpos[0],startpos[1]+bspH*4-2);
  text('Year 4', startpos[0],startpos[1]+bspH*5-2);
  text('One of:',startpos[0]+shft,startpos[1]+bspH*6+shft-2);
  text('One of:',startpos[0]+shft+bsp*3+30,startpos[1]+bspH*6+shft-2);
  
  //Buttons Creation and Style
  for (let x = 0; x<cNames.length; x++) {
    buttons[x] = createButton(cNames[x]);
    buttons[x].size(bs, bsH);
    buttons[x].style('background-color', color(bgdca[x]));
    buttons[x].style('border', 1);
    buttons[x].style('border-color', color(bdca[x]));
    buttons[x].style('border-radius', '4px');
    buttons[x].style('margin', '4px');
    buttons[x].style('border', '2px solid #f44336;');
    buttons[x].style('font-size', '12px');
    buttons[x].style('font-family', 'Verdana');
    buttons[x].style('opacity', 1);
  }
  for (let x = 47; x<47+1; x++) {
    buttons[x].style('opacity', 0.4);
    buttons[x].style('cursor', 'not-allowed');
  }
  for (let x = 48; x<48+3; x++) {
    buttons[x].style('opacity', 0);
  }
    
  //Row1
  let row1 = [];
  row1 = [0,1,2,3,4,8];
  for (let x = 0; x<row1.length; x++) {
    buttons[row1[x]].position(startpos[0]+bsp*x, startpos[1]+bspH*(0));
  }
  //Row2
  let row2 = [];
  row2 = [35,36,32,33,34,10];
  for (let x = 0; x<row2.length; x++) {
    buttons[row2[x]].position(startpos[0]+bsp*x, startpos[1]+bspH*(1));
  }
  //Row3
  let row3 = [];
  row3 = [5,6,7,9,11,12];
  for (let x = 0; x<row3.length; x++) {
    buttons[row3[x]].position(startpos[0]+bsp*x, startpos[1]+bspH*(2));
  }
  //Row4
  let row4 = [];
  row4 = [14,15,17,20,37,47];
  for (let x = 0; x<row4.length; x++) {
    buttons[row4[x]].position(startpos[0]+bsp*x, startpos[1]+bspH*(3));
  }
  //Row5
  let row5 = [];
  row5 = [13,18,21,22,23,24];
  for (let x = 0; x<row5.length; x++) {
    buttons[row5[x]].position(startpos[0]+bsp*x, startpos[1]+bspH*(4));
  }
  //Row6
  let row6 = [];
  row6 = [38,16,19,25,26,27];
  for (let x = 0; x<row6.length; x++) {
    buttons[row6[x]].position(startpos[0]+bsp*x+shft, startpos[1]+bspH*(5)+shft);
  }
  //Row7
  let row7 = [];
  row7 = [39,40,41];
  for (let x = 0; x<row7.length; x++) {
    buttons[row7[x]].position(startpos[0]+bsp*x+shft, startpos[1]+bspH*(6)+shft);
  }
  //Row8
  let row8 = [];
  row8 = [28,29,30,31];
  for (let x = 0; x<row8.length; x++) {
    buttons[row8[x]].position(startpos[0]+bsp*(3+x)+30+shft, startpos[1]+bspH*(6)+shft);
  }
  //Row9
  let row9 = [];
  row9 = [48,49,50];
  for (let x = 0; x<row9.length; x++) {
    buttons[row9[x]].position(startpos[0]+bsp*(x)+shft, startpos[1]+bspH*(7)+shft*3);
  }
  //Row10 Maths Vertical
  let row10 = [];
  row10 = [42,43,45,44,46];
  for (let x = 0; x<row10.length; x++) {
    buttons[row10[x]].position(startpos[0]+(bsp*6)+30, startpos[1]+bspH*(x));
  }
  
  
  //Apply Functionality
  buttons[0].mousePressed(functions0);
  buttons[1].mousePressed(functions1);
  buttons[2].mousePressed(functions2);
  buttons[3].mousePressed(functions3);
  buttons[4].mousePressed(functions4);
  buttons[5].mousePressed(functions5);
  buttons[6].mousePressed(functions6);
  buttons[7].mousePressed(functions7);
  buttons[8].mousePressed(functions8);
  buttons[9].mousePressed(functions9);
  buttons[10].mousePressed(functions10);
  buttons[11].mousePressed(functions11);
  buttons[12].mousePressed(functions12);
  buttons[13].mousePressed(functions13);
  buttons[14].mousePressed(functions14);
  buttons[15].mousePressed(functions15);
  buttons[16].mousePressed(functions16);
  buttons[17].mousePressed(functions17);
  buttons[18].mousePressed(functions18);
  buttons[19].mousePressed(functions19);
  buttons[20].mousePressed(functions20);
  buttons[21].mousePressed(functions21);
  buttons[22].mousePressed(functions22);
  buttons[23].mousePressed(functions23);
  buttons[24].mousePressed(functions24);
  buttons[25].mousePressed(functions25);
  buttons[26].mousePressed(functions26);
  buttons[27].mousePressed(functions27);
  buttons[28].mousePressed(functions28);
  buttons[29].mousePressed(functions29);
  buttons[30].mousePressed(functions30);
  buttons[31].mousePressed(functions31);
  buttons[32].mousePressed(functions32);
  buttons[33].mousePressed(functions33);
  buttons[34].mousePressed(functions34);
  buttons[35].mousePressed(functions35);
  buttons[36].mousePressed(functions36);
  buttons[37].mousePressed(functions37);
  buttons[38].mousePressed(functions38);
  buttons[39].mousePressed(functions39);
  buttons[40].mousePressed(functions40);
  buttons[41].mousePressed(functions41);
  buttons[42].mousePressed(functions42);
  buttons[43].mousePressed(functions43);
  buttons[44].mousePressed(functions44);
  buttons[45].mousePressed(functions45);
  buttons[46].mousePressed(functions46);
  
}

function selectCol(numIn, colorSelect) {
    buttons[numIn].style('border-color', color(colorSelect));
    buttons[numIn].style('background-color', color(colorSelect));
}

function allBlack() {
  for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('background-color', color(blck));
    buttons[x].style('border-color', color(blck));
    buttons[x].style('color', color(bc));
    buttons[x].style('text-shadow', '0px 0px 1px #000000');
  }
}

function eraseText() {
  fill(pc);
  stroke(pc);
  rect(bsp*8+5+adjX, 5+adjY, W, H);
}


function displayInfo(numIn) {
  fill(255);
  stroke(255);
  rect(bsp*8+5+adjX, 5+adjY, W, H);
  fill(0);
  textSize(14);
  text('Course Name:' + " " +cNamesB[numIn], bsp*8+10+adjX, 20+adjY);
  textSize(12);
  text('Credits:' + " " + creditsArray[numIn], bsp*8+10+adjX, 47.5+adjY);
  text('Course Description:' + '\n' + descArray[numIn], bsp*8+10+adjX, 65+adjY, bsp*3-10, bsp*4);
  fill(sc);
  rect((bsp*8)+10+adjX, (bspH*3)+5+adjY, 20,20);
  fill(0);
  text('Selected Course', (bsp*8)+32+adjX, (bspH*3)+20+adjY);
  fill(crc);
  rect((bsp*8)+10+adjX, (bspH*3)+30+adjY, 20,20);
  fill(0);
  text('Core-requisite Course', (bsp*8)+32+adjX, (bspH*3)+45+adjY);
  fill(prc);
  rect((bsp*8)+10+adjX, (bspH*3)+55+adjY, 20,20);
  fill(0);
  text('Pre-requisite Course', (bsp*8)+32+adjX, (bspH*3)+70+adjY);
  fill(pc);
  rect((bsp*8)+10+adjX, (bspH*3)+80+adjY, 20,20);
  fill(0);
  text('Proceeding Course', (bsp*8)+32+adjX, (bspH*3)+95+adjY);
  fill(ppc);
  rect((bsp*8)+10+adjX, (bspH*3)+105+adjY, 20,20);
  fill(0);
  text('Course After Proceeding Course', (bsp*8)+32+adjX, (bspH*3)+120+adjY);
}

function rundefault() {
  for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('background-color', color(bgdca[x]));
    buttons[x].style('border-color', color(bdca[x]));
    buttons[x].style('text-shadow', '0px 0px 0px #000000');
  }
}

function functions0() {
  if (Z[0] == 0) {
    allBlack();
    selectCol(0, sc);
    selectCol(16, pc);
    selectCol(26, pc);
    selectCol(28, pc);
    eraseText();
    displayInfo(0);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[0] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions1() {
  if (Z[1] == 0) {
    allBlack();
    selectCol(1, sc);
    selectCol(26, pc);
    selectCol(27, ppc);
    eraseText();
    displayInfo(1);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[1] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions2() {
  if (Z[2] == 0) {
    allBlack();
    selectCol(2, sc);
    selectCol(3, pc);
    selectCol(25, pc);
    eraseText();
    displayInfo(2);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[2] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions3() {
  if (Z[3] == 0) {
    allBlack();
    selectCol(3, sc);
    selectCol(2, prc);
    eraseText();
    displayInfo(3);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[3] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions4() {
  if (Z[4] == 0) {
    allBlack();
    selectCol(4, sc);
    selectCol(32, prc);
    selectCol(43, prc);
    selectCol(12, pc);
    selectCol(16, pc);
    selectCol(28, pc);
    selectCol(29, pc);
    selectCol(30, pc);
    eraseText();
    displayInfo(4);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[4] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions5() {
  if (Z[5] == 0) {
    allBlack();
    selectCol(5, sc);
    selectCol(16, pc);
    selectCol(23, pc);
    selectCol(24, pc);
    selectCol(28, pc);
    selectCol(32, prc);
    selectCol(34, prc);
    eraseText();
    displayInfo(5);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[5] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions6() {
  if (Z[6] == 0) {
    allBlack();
    selectCol(6, sc);
    selectCol(22, pc);
    selectCol(23, pc);
    selectCol(14, pc);
    selectCol(15, pc);
    selectCol(16, ppc);
    selectCol(44, prc);
    selectCol(24, ppc);
    selectCol(26, ppc);
    selectCol(30, ppc);
    eraseText();
    displayInfo(6);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[6] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions7() {
  if (Z[7] == 0) {
    allBlack();
    selectCol(7, sc);
    selectCol(15, pc);
    selectCol(44, prc);
    selectCol(46, prc);
    selectCol(32, prc);
    selectCol(22, ppc);
    selectCol(16, ppc);
    eraseText();
    displayInfo(7);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[7] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions8() {
  if (Z[8] == 0) {
    allBlack();
    selectCol(8, sc);
    selectCol(9, pc);
    selectCol(12, pc);
    selectCol(20, pc);
    selectCol(46, crc);
    selectCol(25, prc);
    selectCol(33, prc);
    selectCol(14, ppc);
    selectCol(18, ppc);
    //sep
    selectCol(29, ppc);
    selectCol(17, ppc);
    selectCol(31, ppc);
    //sep
    selectCol(21, ppc);
    selectCol(19, ppc);
    eraseText();
    displayInfo(8);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[8] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions9() {
  if (Z[9] == 0) {
    allBlack();
    selectCol(9, sc);
    selectCol(17, pc);
    selectCol(29, pc);
    selectCol(31, pc);
    selectCol(8, prc);
    selectCol(23, ppc);
    selectCol(24, ppc);
    selectCol(18, ppc);
    eraseText();
    displayInfo(9);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[9] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions10() {
  if (Z[10] == 0) {
    allBlack();
    selectCol(10, sc);
    selectCol(44, crc);
    selectCol(45, prc);
    selectCol(33, prc);
    eraseText();
    displayInfo(10);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[10] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions11() {
  if (Z[11] == 0) {
    allBlack();
    selectCol(11, sc);
    selectCol(14, pc);
    selectCol(20, pc);
    selectCol(43, prc);
    selectCol(45, prc);
    selectCol(26, ppc);
    selectCol(30, ppc);
    selectCol(21, ppc);
    selectCol(19, ppc);
    eraseText();
    displayInfo(11);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[11] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions12() {
  if (Z[12] == 0) {
    allBlack();
    selectCol(12, sc);
    selectCol(14, pc);
    selectCol(18, pc);
    selectCol(46, prc);
    selectCol(4, prc);
    selectCol(8, prc);
    selectCol(26, ppc);
    selectCol(30, ppc);
    eraseText();
    displayInfo(12);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[12] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions13() {
  if (Z[13] == 0) {
    allBlack();
    selectCol(13, sc);
    eraseText();
    displayInfo(13);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[13] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions14() {
  if (Z[14] == 0) {
    allBlack();
    selectCol(14, sc);
    selectCol(26, pc);
    selectCol(30, pc);
    selectCol(6, prc);
    selectCol(11, prc);
    selectCol(12, prc);
    eraseText();
    displayInfo(14);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[14] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions15() {
  if (Z[15] == 0) {
    allBlack();
    selectCol(15, sc);
    selectCol(24, pc);
    selectCol(33, prc);
    selectCol(6, prc);
    selectCol(7, prc);
    selectCol(16, pc);
    eraseText();
    displayInfo(15);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[15] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions16() {
  if (Z[16] == 0) {
    allBlack();
    selectCol(16, sc);
    selectCol(0, prc);
    selectCol(4, prc);
    selectCol(5, prc);
    selectCol(15, prc);
    eraseText();
    displayInfo(16);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[16] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions17() {
  if (Z[17] == 0) {
    allBlack();
    selectCol(17, sc);
    selectCol(18, pc);
    selectCol(24, pc);
    selectCol(23, pc);
    selectCol(9, prc);
    eraseText();
    displayInfo(17);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[17] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions18() {
  if (Z[18] == 0) {
    allBlack();
    selectCol(18, sc);
    selectCol(12, prc);
    selectCol(17, prc);
    selectCol(21, crc);
    eraseText();
    displayInfo(18);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[18] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions19() {
  if (Z[19] == 0) {
    allBlack();
    selectCol(19, sc);
    selectCol(20, prc);
    eraseText();
    displayInfo(19);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[19] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions20() {
  if (Z[20] == 0) {
    allBlack();
    selectCol(20, sc);
    selectCol(21, pc);
    selectCol(19, pc);
    selectCol(8, prc);
    selectCol(11, prc);
    eraseText();
    displayInfo(20);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[20] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions21() {
  if (Z[21] == 0) {
    allBlack();
    selectCol(21, sc);
    selectCol(20, prc);
    eraseText();
    displayInfo(21);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[21] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions22() {
  if (Z[22] == 0) {
    allBlack();
    selectCol(22, sc);
    selectCol(6, prc);
    selectCol(15, crc);
    selectCol(46, prc);
    eraseText();
    displayInfo(22);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[22] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions23() {
  if (Z[23] == 0) {
    allBlack();
    selectCol(23, sc);
    selectCol(5, prc);
    selectCol(6, prc);
    selectCol(17, prc);
    eraseText();
    displayInfo(23);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[23] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions24() {
  if (Z[24] == 0) {
    allBlack();
    selectCol(24, sc);
    selectCol(5, prc);
    selectCol(15, prc);
    selectCol(17, prc);
    eraseText();
    displayInfo(24);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[24] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions25() {
  if (Z[25] == 0) {
    allBlack();
    selectCol(25, sc);
    selectCol(2, prc);
    eraseText();
    displayInfo(25);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[25] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions26() {
  if (Z[26] == 0) {
    allBlack();
    selectCol(26, sc);
    selectCol(27, pc);
    selectCol(0, prc);
    selectCol(1, prc);
    selectCol(14, prc);
    eraseText();
    displayInfo(26);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[26] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions27() {
  if (Z[27] == 0) {
    allBlack();
    selectCol(27, sc);
    selectCol(26, prc);
    eraseText();
    displayInfo(27);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[27] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions28() {
  if (Z[28] == 0) {
    allBlack();
    selectCol(28, sc);
    selectCol(0, prc);
    selectCol(4, prc);
    selectCol(5, prc);
    eraseText();
    displayInfo(28);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[28] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions29() {
  if (Z[29] == 0) {
    allBlack();
    selectCol(29, sc);
    selectCol(4, prc);
    selectCol(9, prc);
    eraseText();
    displayInfo(29);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[29] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions30() {
  if (Z[30] == 0) {
    allBlack();
    selectCol(30, sc);
    selectCol(4, prc);
    selectCol(14, prc);
    eraseText();
    displayInfo(30);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[30] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions31() {
  if (Z[31] == 0) {
    allBlack();
    selectCol(31, sc);
    selectCol(9, prc);
    selectCol(36, prc);
    eraseText();
    displayInfo(31);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[31] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions32() {
  if (Z[32] == 0) {
    allBlack();
    selectCol(32, sc);
    selectCol(4, pc);
    selectCol(5, pc);
    selectCol(7, pc);
    selectCol(33, pc);
    selectCol(42, crc);
    selectCol(28, ppc);
    selectCol(16, ppc);
    selectCol(30, ppc);
    selectCol(29, ppc);
    //sep
    selectCol(28, ppc);
    selectCol(16, ppc);
    selectCol(23, ppc);
    selectCol(24, ppc);
    //sep
    selectCol(15, ppc);
    //sep
    selectCol(10, ppc);
    selectCol(8, ppc);
    
    eraseText();
    displayInfo(32);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[32] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions33() {
  if (Z[33] == 0) {
    allBlack();
    selectCol(33, sc);
    selectCol(8, pc);
    selectCol(10, pc);
    selectCol(15, pc);
    selectCol(43, crc);
    selectCol(32, prc);
    selectCol(16, ppc);
    selectCol(24, ppc);
    //sep
    selectCol(12, ppc);
    selectCol(9, ppc);
    selectCol(20, ppc);
    
    eraseText();
    displayInfo(33);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[33] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions34() {
  if (Z[34] == 0) {
    allBlack();
    selectCol(34, sc);
    selectCol(5, pc);
    eraseText();
    displayInfo(34);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[34] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions35() {
  if (Z[35] == 0) {
    allBlack();
    selectCol(35, sc);
    selectCol(36, pc);
    selectCol(31, ppc);
    eraseText();
    displayInfo(35);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[35] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions36() {
  if (Z[36] == 0) {
    allBlack();
    selectCol(36, sc);
    selectCol(31, pc);
    selectCol(35, prc);
    eraseText();
    displayInfo(36);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[36] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions37() {
  if (Z[37] == 0) {
    allBlack();
    selectCol(37, sc);
    
    eraseText();
    displayInfo(37);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[37] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions38() {
  if (Z[38] == 0) {
    allBlack();
    selectCol(38, sc);
    
    eraseText();
    displayInfo(38);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[38] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions39() {
  if (Z[39] == 0) {
    allBlack();
    selectCol(39, sc);
    
    eraseText();
    displayInfo(39);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[39] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions40() {
  if (Z[40] == 0) {
    allBlack();
    selectCol(40, sc);
    
    eraseText();
    displayInfo(40);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[40] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions41() {
  if (Z[41] == 0) {
    allBlack();
    selectCol(41, sc);
    
    eraseText();
    displayInfo(41);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[41] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions42() {
  if (Z[42] == 0) {
    allBlack();
    selectCol(32, crc);
    selectCol(42, sc);
    selectCol(43, pc);
    selectCol(45, pc);
    selectCol(44, ppc);
    selectCol(46, ppc);
    selectCol(4, ppc);
    selectCol(5, ppc);
    selectCol(6, ppc);
    selectCol(7, ppc);
    selectCol(33, ppc);
    eraseText();
    displayInfo(42);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[42] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions43() {
  if (Z[43] == 0) {
    allBlack();
    selectCol(4, pc);
    selectCol(33, crc);
    selectCol(43, sc);
    selectCol(44, pc);
    selectCol(46, pc);
    selectCol(42, prc);
    selectCol(15, ppc);
    selectCol(10, ppc);
    selectCol(8, ppc);
    eraseText();
    displayInfo(43);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[43] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions44() {
  if (Z[44] == 0) {
    allBlack();
    selectCol(44, sc);
    selectCol(6, pc);
    selectCol(7, pc);
    selectCol(10, crc);
    selectCol(43, prc);
    selectCol(14, ppc);
    selectCol(20, ppc);
    eraseText();
    displayInfo(44);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[44] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions45() {
  if (Z[45] == 0) {
    allBlack();
    selectCol(8, pc);
    selectCol(10, pc);
    selectCol(11, pc);
    selectCol(45, sc);
    selectCol(46, pc);
    selectCol(42, prc);
    selectCol(12, ppc);
    selectCol(9, ppc);
    selectCol(20, ppc);
    //sep
    
    eraseText();
    displayInfo(45);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[45] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
function functions46() {
  if (Z[46] == 0) {
    allBlack();
    selectCol(46, sc);
    selectCol(12, pc);
    selectCol(7, pc);
    selectCol(22, pc);
    selectCol(8, crc);
    selectCol(43, prc);
    selectCol(45, prc);
    selectCol(15, ppc);
    //sep
    selectCol(14, ppc);
    selectCol(18, ppc);
    eraseText();
    displayInfo(46);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[46] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

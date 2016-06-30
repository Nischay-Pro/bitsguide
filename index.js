var queries = [{
    id: 0,
    text: "Your simple guide to joining BITS",
    subhead: "This is a simple tool to guide you to joining BITS right from BITSAT.",
    answers: [{
        text: "Let's roll!",
        target: 1
    }]
}, {
    id: 1,
    text: "Have you written the BITSAT Exam?",
    answers: [{
        text: "Yes",
        target: 2
    }, {
        text: "No",
        target: 3
    }]
}, {
    id: 2,
    text: "Please write the BITSAT Exam..",
    answers: []
}, {
    id: 3,
    text: "Are the results declared?",
    answers: [{
        text: "Yes",
        target: 4
    }, {
        text: "No",
        target: 5
    }]
}, {
    id: 4,
    text: "Have you consulted with seniors from BITSAT Group regarding you score, choice and availability of branches?",
    answers: [{
        text: "Yes",
        target: 6
    }, {
        text: "No",
        target: 7
    }]
}, {
    id: 5,
    text: "Please wait for the results to be declared.",
    answers: []
}, {
    id: 6,
    text: "Has the allotment procedure started?",
    answers: [{
        text: "Yes",
        target: 7
    }, {
        text: "No",
        target: 8
    }]
}, {
    id: 7,
    text: "Have you entered your preference of choices?",
    answers: [{
        text: "Yes",
        target: 10
    }, {
        text: "No",
        target: 9
    }]
}, {
    id: 8,
    text: "Wait for the allotment procedure to start.",
    answers: []
}, {
    id: 9,
    text: "Please enter your preference of choices before the alloted time slot.",
    answers: []
}, {
    id: 10,
    text: "Did you get selected in the first round?",
    answers: [{
        text: "Yes",
        target: 11
    }, {
        text: "No",
        target: 12
    }]
}, {
    id: 11,
    text: "Congratulations. Just one more step before becoming a BITSIAN. Pay the deposit and report to the alloted date.",
    answers: []
}, {
    id: 12,
    text: "Did you get selected in the second round?",
    answers: [{
        text: "Yes",
        target: 11
    }, {
        text: "No",
        target: 13
    }]
}, {
    id: 13,
    text: "Did you get selected in the third round?",
    answers: [{
        text: "Yes",
        target: 11
    }, {
        text: "No",
        target: 14
    }]
}, {
    id: 14,
    text: "Sorry. You did not get selected based on your preference. Better luck next time.",
    answers: []
}];

function AppViewModel() {
    this.text = ko.observable();
    this.subhead = ko.observable();
}

ko.applyBindings(new AppViewModel());

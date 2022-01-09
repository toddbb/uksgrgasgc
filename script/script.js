const domPageBtn = document.getElementsByClassName("page-btn");
const domNavBtn = document.getElementsByClassName("nav-btn");


const navBtnClicked = (e) => {
    const id = e.target.id;
    const classes = e.target.classList;

    if (classes.contains("nav-btn-disabled") || classes.contains("active")) { return false } ;

    toggleClasses(domNavBtn, classes, "active");

    const mockIdRef = {
        "view-preCourse": "mock-preCourse",
        "view-midCourse": "mock-midCourse",
        "view-endCourse": "mock-endCourse"
    }
    const domMockAll = document.getElementsByClassName("mock-img");

    ///// remove active class from all mock imgs  ///
    Array.from(domMockAll).forEach(el => {
        el.classList.remove("mock-active");
    })
    // then add active class to all precourse -OR - midcourse - OR - endcourse views
    Array.from(domMockAll).forEach(el => {
        if (el.classList.contains(mockIdRef[id])) {
            el.classList.add("mock-active");
        };
    })


    //const elMock = document.getElementById(mockIdRef[id]);
    //const classesMock = elMock.classList;
    //toggleClasses(domMockChart, classesMock, "mock-active")

    const elMetrics = document.getElementsByClassName("grid-metrics")[0];
    if (id === "view-preCourse") {
        elMetrics.classList.add("grid-metrics-oneRow")
    } else {
        elMetrics.classList.remove("grid-metrics-oneRow");
    }

};



const pageBtnClicked = (e) => {
    const id = e.target.id;
    const classes = e.target.classList;

    if (classes.contains("page-btn-disabled") || classes.contains("page-btn-active")) { return false } ;

    toggleClasses(domPageBtn, classes, "page-btn-active");

    const mockIdRef = {
        "view-chart": "chartView",
        "view-table": "tableView",
        "view-comments": "commentsView"
    }

    const domView = document.getElementsByClassName("pageType");
    const viewClasses = Array.from(domView).forEach(el => {
        if (el.classList.contains(mockIdRef[id])) {
            toggleClasses(domView, el.classList, "page-active");
        }
    })
    
    
};



///////     HELPER FUNCTIONS     /////////////////
function toggleClasses (domToken, tgtClassList, toggleClass) {    
    Array.from(domToken).forEach(el => {
        el.classList.remove(toggleClass);
    });
    tgtClassList.toggle(toggleClass);
}



///////     EVENT LISTENERS    /////////////////
Array.from(domPageBtn).forEach((el) => {
  el.addEventListener("click", (e) => {
    pageBtnClicked(e);
  });
});

Array.from(domNavBtn).forEach((el) => {
  el.addEventListener("click", (e) => {
    navBtnClicked(e);
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

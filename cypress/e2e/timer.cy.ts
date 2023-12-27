describe("Timer", () => {
  it("should change timer type if timer type button is clicked", () => {
    cy.visit("/");

    // check if timer type is set to 25 minutes by default
    cy.get("#timeDisplay").should("contain", "25:00");

    // find button with Short Break text
    cy.get("button").contains("Short Break").click();

    // check if timer type is set to 5 minutes
    cy.get("#timeDisplay").should("contain", "05:00");

    // find button with Long Break text
    cy.get("button").contains("Long Break").click();

    // check if timer type is set to 15 minutes
    cy.get("#timeDisplay").should("contain", "15:00");
  });

  it("should reset timer if timer of another type is started", () => {
    cy.visit("/");

    // check if timer type is set to 25 minutes by default
    cy.get("#timeDisplay").should("contain", "25:00");

    // start timer by pressing Start button
    cy.get("button").contains("Start").click();

    // wait 5 seconds for timer to tick
    cy.wait(5000);

    // check if timer is ticking
    cy.get("#timeDisplay").should("not.contain", "25:00");

    // stop timer by pressing Stop button
    cy.get("button").contains("Stop").click();

    // switch to Short Break timer
    cy.get("button").contains("Short Break").click();

    // start and stop timer
    cy.get("button").contains("Start").click();
    cy.get("button").contains("Stop").click();

    // return to Pomodoro timer
    cy.get("button").contains("Pomodoro").click();

    // check if timer is reset
    cy.get("#timeDisplay").should("contain", "25:00");
  });
});

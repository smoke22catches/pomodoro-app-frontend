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
});

describe('Pizza form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const nameInput = () => cy.get("input[name=name]");
  const select = () => cy.get('select');
  const radio = () => cy.get('[type=radio]');
  const checkbox = () => cy.get('[type=checkbox]');
  const submitBttn = () => cy.get(`button[id=order-button]`);

  it('Sanity check', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(6);
    expect({}).not.to.equal({});
  })

  it('Proper elemets showing', () => {
    nameInput().should('exist');
    select().should('exist');
    radio().should('exist');
    checkbox().should('exist');
    submitBttn().should('exist');
  })

  describe('Filling out the inputs', () => {
    it("Submit button starts out disabled", () => {
      submitBttn().should("be.disabled")
    })
    it("Can type in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("John Doe")
        .should("have.value", "John Doe")
    })
    it('Can check radio and checkboxes', () => {
      radio().check()
      checkbox().check()
    })
    it("Submit button activates when all inputs are filled out", () => {
      nameInput().type("John Doe");
      select().select('small');
      radio().check();
      checkbox().check();
      submitBttn().should("not.be.disabled");
    })
  })
  describe("Submit order", () => {
    it("Can submit an order", () => {
      nameInput().type("John Doe");
      select().select('small');
      radio().check();
      checkbox().check();
      submitBttn().click();
    })
  })



})
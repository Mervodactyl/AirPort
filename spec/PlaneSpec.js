describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('A Plane should', function() {
    it('have a default state of Grounded', function() {
      expect(plane.flying).toBe(false);
    });

    it('be able to Take Off', function() {
      plane.takeOff();
      expect(plane.flying).toBe(true);
    });

    it('be able to Land', function() {
      plane.takeOff();
      plane.land();
      expect(plane.flying).toBe(false);
    });

    it('have a default state of No Passengers on board', function() {
      expect(plane.occupied).toBe(false);
    });

    it('be able to take Passengers on board', function() {
      plane.boarded();
      expect(plane.occupied).toBe(true);
    });

    it('Take Off once Passengers are on board', function() {
      plane.boarded();
      plane.takeOff();
      expect(plane.flying).toBe(true);
    });



    it('Explode if a Terrorist attacks', function() {
      plane.boarded();
      plane.takeOff();
      plane.terroristAttack();
      expect(plane.explode).toBe(true);
    });
  });



});

describe('Validation', function () {
    it('empty Check', function () {
        expect(val.emptyCheck("")[0]).toEqual(false);
    });

    it('empty Check1', function () {
        expect(val.emptyCheck("dasfsd")[0]).toEqual(true);
    });
    //--------------------------------------------------
    it('emailCheck1', function () {
        expect(val.emailCheck("dfsd.com")[0]).toEqual(false);
    });
    it('emailCheck2', function () {
        expect(val.emailCheck("dfsd@")[0]).toEqual(false);
    });
    it('emailCheck3', function () {
        expect(val.emailCheck("dfsd@ggerge")[0]).toEqual(false);
    });
    it('emailCheck4', function () {
        expect(val.emailCheck("dfsd@ggerge.com")[0]).toEqual(true);
    });
    //----------------------------------------------------
    it('PhoneCheck1', function () {
        expect(val.phoneCheck("12345678")[0]).toEqual(false);
    });
    it('PhoneCheck2', function () {
        expect(val.phoneCheck("123456789012")[0]).toEqual(false);
    });
    it('PhoneCheck3', function () {
        expect(val.phoneCheck("1234567890")[0]).toEqual(true);
    });
    //-----------------------------------------------------
    it('NumberCheck1', function () {
        expect(val.numberCheck("12345678")[0]).toEqual(true);
    });
    it('NumberCheck2', function () {
        expect(val.numberCheck("123456fsdfsd89012")[0]).toEqual(false);
    });
    it('NumberCheck3', function () {
        expect(val.numberCheck("12")[0]).toEqual(true);
    });
});

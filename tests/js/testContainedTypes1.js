(function($) {

    module("containedTypes1");

    // Test case : Contained Types
    _asyncTest("Contained Types", function()
    {
        expect(1);

        var gitana = GitanaTest.authenticateFullOAuth();
        gitana.then(function() {

            // NOTE: this = platform

            this.subchain(this.getCluster()).loadContainedTypes("platform", function(list) {
                equal(21, list.length, "Found 21 contained dependencies for platform");

                start();
            });
        });
    });

}(jQuery) );

(function($) {

    module("chainable2");

    // Test case : Chainable 2
    _asyncTest("Chainable 2", function()
    {
        expect(10);

        //Chain.debug = true;

        var gitana = GitanaTest.authenticateFullOAuth();
        gitana.createRepository().then(function() {

            // NOTE: this = repository

            // create 8 branches in serial
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");
            this.createBranch("master", "0:root");

            // update all of the branches in serial each()
            var x = 0;
            this.listBranches().each(function() {

                // update branch
                var title = "branch-title-" + x++;
                this["title"] = title;

                this.update().then(function() {
                    equal(this["title"], title, "Title matched");
                });

            });

            // list all of the branches and test keepOne()
            this.listBranches().keepOne().then(function() {
                ok(this.objectType() == "Gitana.Branch", "Found a single branch");
                success();
            });
        });

        var success = function()
        {
            start();
        }

    });

}(jQuery) );

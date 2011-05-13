(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.BranchMap = Gitana.AbstractMap.extend(
    /** @lends Gitana.BranchMap.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractMap
         *
         * @class Map of branch objects
         *
         * @param {Gitana.Repository} repository
         * @param [Object] object
         */
        constructor: function(repository, object)
        {
            this.objectType = "Gitana.BranchMap";

            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // PRIVILEGED METHODS
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            /**
             * Gets the Gitana Repository object.
             *
             * @inner
             *
             * @returns {Gitana.Repository} The Gitana Repository object
             */
            this.getRepository = function() { return repository; };

            /**
             * Gets the Gitana Repository id.
             *
             * @inner
             *
             * @returns {String} The Gitana Repository id
             */
            this.getRepositoryId = function() { return repository.getId(); };


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // CALL THROUGH TO BASE CLASS (at the end)
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            this.base(repository.getServer(), object);
        },

        /**
         * @override
         */
        clone: function()
        {
            return this.getFactory().branchMap(this.getRepository(), this.object);
        },

        /**
         * @param json
         */
        buildObject: function(json)
        {
            return this.getFactory().branch(this.getRepository(), json);
        }

    });

})(window);

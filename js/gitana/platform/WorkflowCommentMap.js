(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.WorkflowCommentMap = Gitana.AbstractPlatformObjectMap.extend(
    /** @lends Gitana.WorkflowCommentMap.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractMap
         *
         * @class Map of workflow comments
         *
         * @param {Gitana.Platform} platform Gitana platform instance.
         * @param [Object] object
         */
        constructor: function(platform, object)
        {
            this.objectType = function() { return "Gitana.WorkflowCommentMap"; };


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // CALL THROUGH TO BASE CLASS (at the end)
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            this.base(platform, object);
        },

        /**
         * @override
         */
        clone: function()
        {
            return this.getFactory().workflowCommentMap(this.getPlatform(), this);
        },

        /**
         * @param json
         */
        buildObject: function(json)
        {
            return this.getFactory().workflowComment(this.getPlatform(), json);
        }

    });

})(window);

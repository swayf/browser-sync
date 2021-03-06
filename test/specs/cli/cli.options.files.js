"use strict";

var cli             = require("../../../lib/cli/cli-options");
var merge           = cli.merge;

var assert          = require("chai").assert;

describe("CLI: Options: Merging Options: Files", function () {
    it("should return the files property from string given", function () {
        var imm = merge({files: "css/*.css"});
        assert.deepEqual(imm.get("files").get("core").toJS(), {
            globs: ["css/*.css"],
            objs: []
        });
    });
    it("should return the files property from Array given with strings in legacy format", function () {
        var imm = merge({files: ["css/*.css,*.html"]});
        assert.deepEqual(imm.get("files").get("core").toJS(), {
            globs: ["css/*.css", "*.html"],
            objs: []
        });
    });
    it("should return the files property from array given", function () {
        var imm = merge({files: ["css/*.css", "*.html"]});
        assert.deepEqual(imm.get("files").get("core").toJS(), {
            globs: ["css/*.css", "*.html"],
            objs: []
        });
    });
});

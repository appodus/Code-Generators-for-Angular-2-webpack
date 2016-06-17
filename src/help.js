/**
 * Created by Rex on 17/06/2016.
 */
/**
 *
 * Help command.
 */

const helper = require('./helper');


module.exports = () => {

  console.log(`
    This generator will generate components, lazy loading components, services, pipes and directives. 
    It creates a new folder for the generated files. Please make sure that the folder does not exist under current folder.
    
    Usage:
    '${helper.name} component my-component-name'      :   generate a new component in new folder 'my-component-name'
    '${helper.name} lazy-component my-component-name' :   generate a new lazy loading component in new folder '+my-component-name'
    '${helper.name} service my-service-name'          :   generate a new service in new folder 'my-service-name'
    '${helper.name} pipe my-pipe-name'                :   generate a new pipe in new folder 'my-pipe-name'
    '${helper.name} directive my-directive-name'      :   generate a new directive in new folder 'my-directive-name'
       
    Use kebab-case for names.
    `)

};
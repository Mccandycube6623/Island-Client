// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	
	// remove all recipes to andesite alloy
	event.remove({output: 'create:andesite_alloy'})
	// add a shapeless recipe to andesite alloy
	//event.shapeless('4x create:andesite_alloy', ['minecraft:andesite', 'tconstruct:seared_brick'])
	event.shaped( '2x create:andesite_alloy', [
		'AB',
		'BA'
	],{
		A: 'minecraft:andesite',
		B: 'tconstruct:seared_brick'
	})
	event.shaped( '2x create:andesite_alloy', [
		'BA',
		'AB'
	],{
		A: 'minecraft:andesite',
		B: 'tconstruct:seared_brick'
	})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
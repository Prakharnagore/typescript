# Generate tsconfig.json (typescript complier file) file

- tsc --init
- tsc -w

# Inheritance

Take all the methods from class x and add them to target class

# Abstact classes

- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to others methods that don't actually exist yet
  ( we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implete some other methods

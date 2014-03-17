import pygame
import random

black = (0,0,0)
white = (255,255,255)
red = (255,0,0)
screen_width = 700
screen_height = 400
clock = pygame.time.Clock()
game_over = False
block_list = pygame.sprite.RenderPlain()
all_sprites_list = pygame.sprite.RenderPlain()

class Block(pygame.sprite.Sprite):
	def __init__(self, color, width, height):
		super(Block, self).__init__()
		self.image = pygame.Surface([width, height])
		self.image.fill(color)
		self.rect = self.image.get_rect()

pygame.init()
screen = pygame.display.set_mode([screen_width, screen_height])

# create block
for i in range(50):
	block = Block(black, 20, 15)
	block.rect.x = random.randrange(screen_width)
	block.rect.y = random.randrange(screen_height)
	block_list.add(block)
	all_sprites_list.add(block)

# create player
player = Block(red, 20, 15)

# add sprites to master list
all_sprites_list.add(player)
all_sprites_list.add(Block(black, 20, 15))

while game_over == False:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			done=True

	# set player position
	pos = pygame.mouse.get_pos()
	player.rect.x = pos[0]
	player.rect.y = pos[1]

	# collision
	block_hit_list = pygame.sprite.spritecollide(player, block_list, True)

	screen.fill(white)
	all_sprites_list.draw(screen)
	clock.tick(20)
	pygame.display.flip()

pygame.quit()


# Question #1
def hello_name(user_name):
    print("hello_" + str(user_name).upper() + "!")

hello_name("Jerry")

print("------------")

# Question #2
for n in range(1, 100):
    if n % 2 != 0:
        print(n)

print("------------")


# Question #3
def max_num_in_list(a_list):
    print(max(a_list))


max_num_in_list([2, 3, 66, 4, 77, 44])

print("------------")


# Question #4
def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 != 0:
            print(True)
        elif year % 100 == 0 and year % 400 == 0:
            print(True)
        elif year % 100 == 0 and year % 400 != 0:
            print(False)
    else:
        print(False)


is_leap_year(1700)
is_leap_year(2012)

print("------------")


# Question #5
def is_consecutive(a_list):
    for idx, val in enumerate(a_list):
        if idx > 0:
            if a_list[idx] - a_list[idx -1] > 1:
                print(False)
                return
    print(True)


is_consecutive([1, 2, 3, 4, 5])
is_consecutive([1, 2, 4, 5, 8])

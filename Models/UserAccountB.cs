using System.ComponentModel.DataAnnotations;

namespace SnapDay {

    public class UserAccountB {

        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
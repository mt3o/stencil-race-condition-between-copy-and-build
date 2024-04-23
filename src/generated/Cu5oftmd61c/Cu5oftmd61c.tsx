
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-u5oftmd61c',
  shadow: true,
})
export class Cu5oftmd61c {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  